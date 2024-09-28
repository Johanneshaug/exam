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
          <p><strong>Your Answer:</strong> {userAnswers[question.id]}</p>
          <p><strong>Solution:</strong> {question.solution}</p>
          <label>
            Rate your answer (0-5): 
            <select
              value={ratings[question.id] || 0} 
              onChange={(e) => handleRatingChange(question.id, e.target.value)}
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </label>
        </div>
      ))}
      <button onClick={handleSubmitRatings}>Submit Ratings</button>
    </div>
  );
}

export default Review;
