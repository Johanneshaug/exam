import React from 'react';

function Question({ question, answer, onAnswerChange }) {
  const handleChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <div className="question">
      <p><strong>{question.text}</strong></p>
      <input 
        type="text" 
        value={answer} 
        onChange={handleChange} 
        placeholder="Your answer here..."
      />
    </div>
  );
}

export default Question;
