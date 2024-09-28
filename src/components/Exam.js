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
      <h2>{exam.title}</h2>
      <form onSubmit={handleSubmit}>
        {exam.questions.map((question) => (
          <Question 
            key={question.id} 
            question={question} 
            answer={answers[question.id] || ''} 
            onAnswerChange={handleAnswerChange} 
          />
        ))}
        <button type="submit">Submit Exam</button>
      </form>
    </div>
  );
}

export default Exam;
