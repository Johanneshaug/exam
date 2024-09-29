import React, { useState, useEffect } from 'react';

function Review({ exam, userAnswers, onRestart }) {
  const [ratings, setRatings] = useState({});
  const [score, setScore] = useState(0);
  const possibleScore = exam.questions.length * 5; // Assuming the max rating is 5

  useEffect(() => {
    // Calculate the total score whenever ratings change
    const totalScore = Object.values(ratings).reduce((acc, rating) => acc + parseInt(rating, 10), 0);
    setScore(totalScore);
  }, [ratings]);

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
            <i>Rate your answer (0-5): </i>
            <select className="rating-select"
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
      <p className="score">Score: {score} / {possibleScore}</p>
      <button onClick={handleSubmitRatings}>Submit Ratings</button>
    </div>
  );
}

export default Review;
