import React, { useState, useEffect } from 'react';

function Review({ exam, userAnswers, aiReviews, onRestart }) {
  const [scores, setScores] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const possibleScore = exam.questions.length * 5;

  useEffect(() => {
    if (Object.keys(aiReviews).length > 0) {
      const aiTotalScore = Object.values(aiReviews).reduce((acc, review) => {
        const scoreMatch = review.match(/Punkte: (\d+)\/5/);
        return acc + (scoreMatch ? parseInt(scoreMatch[1], 10) : 0);
      }, 0);
      setTotalScore(aiTotalScore);
    }
  }, [aiReviews]);

  const handleScoreChange = (questionId, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [questionId]: score
    }));
  };

  useEffect(() => {
    if (Object.keys(aiReviews).length === 0) {
      const newTotalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
      setTotalScore(newTotalScore);
    }
  }, [scores, aiReviews]);

  const handleSubmitRatings = () => {
    if (Object.keys(aiReviews).length > 0) {
      console.log('KI-Bewertungen:', aiReviews);
    } else {
      console.log('Selbstbewertung:', scores);
    }
    onRestart();
  };

  const truncateFeedback = (feedback, wordLimit = 15) => {
    const words = feedback.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return feedback;
  };

  return (
    <div>
      <h2>Überprüfen Sie Ihre Antworten</h2>
      {exam.questions.map((question, index) => (
        <div key={question.id} className="review-question">
          <p><strong>Frage {index + 1}: {question.text}</strong></p>
          <p><strong>Ihre Antwort:</strong> {userAnswers[question.id] || 'Keine Antwort gegeben'}</p>
          <p><strong>Lösung:</strong> {question.solution}</p>
          {aiReviews[question.id] ? (
            <div className="ai-review">
              <p><strong>KI-Bewertung:</strong></p>
              <p>{truncateFeedback(aiReviews[question.id])}</p>
            </div>
          ) : (
            <div className="self-review">
              <p><strong>Selbstbewertung:</strong></p>
              <div className="range-wrap">
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={scores[question.id] || 0}
                  onChange={(e) => handleScoreChange(question.id, parseInt(e.target.value))}
                  className="range"
                />
                <div className="range-value">
                  <span>{scores[question.id] || 0}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <p className="score">Gesamtpunktzahl: {totalScore} / {possibleScore}</p>
      <button onClick={handleSubmitRatings}>Überprüfung abschließen</button>
    </div>
  );
}

export default Review;
