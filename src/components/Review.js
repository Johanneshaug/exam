import React, { useState } from 'react';

function Review({ exam, userAnswers, onRestart }) {
  const [ratings, setRatings] = useState({});

  const handleRatingChange = (questionId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [questionId]: rating,
    }));
  };

  const handleSubmitRatings = () => {
    // For demonstration, we'll just log the ratings
    console.log('User Ratings:', ratings);
    alert('Ratings submitted! Check console for details.');
    onRestart();
  };

  return (
    <div>
      <h2>Review Your Answers</h2>
      {exam.questions.map((question) => (
        <div key={question.id} className="review-question">
          <p><strong>{question.text}</strong></p>
          <p>Your Answer: {userAnswers[question.id]}</p>
          <p>Solution: {question.solution}</p>
          <label>
            Rate your answer (1-5): 
            <input 
              type="number" 
              min="1" 
              max="5" 
              value={ratings[question.id] || ''} 
              onChange={(e) => handleRatingChange(question.id, e.target.value)} 
            />
          </label>
        </div>
      ))}
      <button onClick={handleSubmitRatings}>Submit Ratings</button>
      <button onClick={onRestart}>Take Another Exam</button>
    </div>
  );
}

export default Review;
