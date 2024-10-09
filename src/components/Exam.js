import React, { useState } from 'react';
import Question from './Question';
import ErrorPopup from './ErrorPopup';

function Exam({ exam, onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(null); // State to hold the score
  const [submitted, setSubmitted] = useState(false); // State to track submission

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
    setSubmitted(true);
    let calculatedScore = 0;

    exam.questions.forEach(question => {
      const correctAnswers = Array.isArray(question.solution) ? question.solution : [question.solution];
      const userAnswers = answers[question.id] || [];
      if (JSON.stringify(correctAnswers.sort()) === JSON.stringify(userAnswers.sort())) {
        calculatedScore += 1; // Increment score for each correct answer
      }
    });

    setScore(calculatedScore); // Set the calculated score
  };

  return (
    <div>
      <h2>{exam.title}</h2>
      {exam.questions.map((question, index) => (
        <Question
          key={question.id}
          question={question}
          answer={answers[question.id] || []}
          onAnswerChange={handleAnswerChange}
          index={index + 1}
        />
      ))}
      {exam.type === 'Multiplechoice' ? (
        <button onClick={handleSubmit} disabled={isLoading}>
          Submit
        </button>
      ) : (
        <button onClick={() => onSubmit(answers)} disabled={isLoading}>
          Submit for Self-Review
        </button>
      )}
      {submitted && (
        <div>
          <h3>Your Score: {score} out of {exam.questions.length}</h3>
          {exam.questions.map(question => {
            const correctAnswers = Array.isArray(question.solution) ? question.solution : [question.solution];
            const userAnswers = answers[question.id] || [];
            const isCorrect = JSON.stringify(correctAnswers.sort()) === JSON.stringify(userAnswers.sort());
            return (
              <div key={question.id}>
                <p>{question.text}</p>
                <p>Your Answer: {userAnswers.join(', ')}</p>
                <p>Correct Answer: {correctAnswers.join(', ')}</p>
                <p>{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <div className="loading-spinner"></div>}
      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
    </div>
  );
}

export default Exam;