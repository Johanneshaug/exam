import React, { useState } from 'react';
import Question from './Question';
import ErrorPopup from './ErrorPopup';

function Exam({ exam, onSubmit, onSubmitWithAI }) {
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  const handleAIReview = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const reviewPromises = exam.questions.map(async (question) => {
        const userAnswer = answers[question.id] || '';
        const isAnswered = userAnswer !== '';
        const isCorrect = isAnswered && (
          (question.type === 'multiple-choice' && userAnswer === question.solution) ||
          (question.type === 'text' && userAnswer.toLowerCase().includes(question.solution.toLowerCase()))
        );

        let prompt;
        if (!isAnswered) {
          prompt = `Frage: ${question.text}\nAntwort des Benutzers: Keine Antwort gegeben\nRichtige Antwort: ${question.solution}\n\nDer Benutzer hat keine Antwort gegeben. Geben Sie eine Bewertung von 0/5 und ein kurzes Feedback (maximal 15 Wörter). Antworten Sie auf Deutsch im Format: "Punkte: 0/5\n[Feedback]"`;
        } else {
          prompt = `Frage: ${question.text}\nAntwort des Benutzers: ${userAnswer}\nRichtige Antwort: ${question.solution}\n\nGeben Sie ein kurzes Feedback (maximal 15 Wörter) und eine Bewertung von 0 bis 5 Punkten. Die Antwort ist ${isCorrect ? 'richtig' : 'falsch'}. Antworten Sie auf Deutsch im Format: "Punkte: [Zahl]/5\n[Feedback]"`;
        }

        const response = await fetch('http://localhost:3001/gemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return { questionId: question.id, review: data.response };
      });

      const reviews = await Promise.all(reviewPromises);
      const reviewObject = reviews.reduce((acc, review) => {
        acc[review.questionId] = review.review;
        return acc;
      }, {});

      onSubmitWithAI(answers, reviewObject);
    } catch (error) {
      console.error('Error getting AI review:', error);
      setError('Die KI ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      <h2>{exam.title}</h2>
      {exam.questions.map((question, index) => (
        <Question
          key={question.id}
          question={question}
          answer={answers[question.id] || ''}
          onAnswerChange={handleAnswerChange}
          index={index + 1}
        />
      ))}
      <button onClick={handleSubmit} disabled={isLoading}>Submit for Self-Review</button>
      <button onClick={handleAIReview} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit and Review with AI'}
      </button>
      {isLoading && <div className="loading-spinner"></div>}
      {error && <ErrorPopup message={error} onClose={handleCloseError} />}
    </div>
  );
}

export default Exam;
