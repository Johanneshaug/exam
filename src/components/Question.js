import React from 'react';

function Question({ question, answer, onAnswerChange, index }) {
  const handleChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <div className="question">
      <p className="question-text">
        <strong>{index}. {question.text}</strong>
      </p>
      {question.type === 'text' ? (
        <input 
          type="text" 
          value={answer} 
          onChange={handleChange} 
          placeholder="Your answer here..."
          className="text-input"
        />
      ) : question.type === 'multiple-choice' ? (
        <div className="multiple-choice-options">
          {question.possibleAnswers.map((option, index) => (
            <div key={index} className="option-wrapper">
              <input
                type="radio"
                id={`${question.id}-${index}`}
                name={`question-${question.id}`}
                value={option}
                checked={answer === option}
                onChange={handleChange}
                className="radio-input"
              />
              <label htmlFor={`${question.id}-${index}`} className="option-button">
                {option}
              </label>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Question;
