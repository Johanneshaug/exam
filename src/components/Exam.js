import React, { useState } from 'react';
import Question from './Question';

function Exam({ exam, onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {exam.questions.map((question, index) => (
          <Question 
            key={question.id} 
            question={question} 
            answer={answers[question.id] || ''} 
            onAnswerChange={handleAnswerChange} 
            index={index + 1} // Pass the question index (1-based)
          />
        ))}
        <button type="submit">Submit Exam</button>
      </form>
    </div>
  );
}

export default Exam;
