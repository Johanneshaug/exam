import React from 'react';

function Question({ question, answer, onAnswerChange, index }) {
  return (
    <div className="question">
      <h3>{index}. {question.text}</h3>
      <div className="multiple-choice-options">
        {question.possibleAnswers.map((possibleAnswer) => (
          <label key={possibleAnswer} className="option-wrapper">
            <input
              type="checkbox"
              value={possibleAnswer}
              checked={answer.includes(possibleAnswer)} // Check if the answer is selected
              onChange={() => onAnswerChange(question.id, possibleAnswer)} // Pass the question ID and selected answer
              className="radio-input"
            />
            <span className="option-button">{possibleAnswer}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question;
