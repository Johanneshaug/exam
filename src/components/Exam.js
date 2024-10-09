import React, { useState } from 'react';
import Question from './Question';
import ErrorPopup from './ErrorPopup';

function Exam({ exam, onSubmit, onSubmitWithAI }) {
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prevAnswers => {
      const currentAnswers = prevAnswers[questionId] || [];
      if (currentAnswers.includes(answer)) {
        // If the answer is already selected, remove it
        return {
          ...prevAnswers,
          [questionId]: currentAnswers.filter(a => a !== answer),
        };
      } else {
        // Otherwise, add it to the selected answers
        return {
          ...prevAnswers,
          [questionId]: [...currentAnswers, answer],
        };
      }
    });
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  const handleAIReview = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const reviewPromises = exam.questions.map(async (question) => {
        const userAnswers = answers[question.id] || [];
        const isAnswered = userAnswers.length > 0;
        const isCorrect = isAnswered && userAnswers.every(answer => question.solution.includes(answer));

        let prompt;
        if (!isAnswered) {
          prompt = `Frage: ${question.text}\nAntwort des Benutzers: Keine Antwort gegeben\nRichtige Antwort: ${question.solution.join(', ')}\n\nDer Benutzer hat keine Antwort gegeben. Geben Sie eine Bewertung von 0/5 und ein kurzes Feedback (maximal 15 Wörter). Antworten Sie auf Deutsch im Format: "Punkte: 0/5\n[Feedback]"`;
        } else {
          prompt = `Frage: ${question.text}\nAntwort des Benutzers: ${userAnswers.join(', ')}\nRichtige Antwort: ${question.solution.join(', ')}\n\nGeben Sie ein kurzes Feedback (maximal 15 Wörter) und eine Bewertung von 0 bis 5 Punkten. Die Antwort ist ${isCorrect ? 'richtig' : 'falsch'}. Antworten Sie auf Deutsch im Format: "Punkte: [Zahl]/5\n[Feedback]"`;
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
          answer={answers[question.id] || []} // Change to handle multiple answers
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