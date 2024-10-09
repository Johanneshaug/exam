import React, { useEffect, useState } from 'react';
import ExamList from './components/ExamList';
import Exam from './components/Exam';
import Review from './components/Review';
import examsData from './data/exams';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'exam', 'review'
  const [selectedExam, setSelectedExam] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('');
  const [aiReviews, setAiReviews] = useState({});
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setCurrentView('exam');
  };

  const handleSubmitExam = (answers) => {
    setUserAnswers(answers);
    setAiReviews({});  // Clear any previous AI reviews
    setCurrentView('review');
  };

  const handleSubmitExamWithAI = (answers, reviews) => {
    setUserAnswers(answers);
    setAiReviews(reviews);
    setCurrentView('review');
  };

  const handleRestart = () => {
    setCurrentView('list');
    setSelectedExam(null);
    setUserAnswers({});
    setAiReviews({});
  };

  useEffect(() => {

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderShrunk(true);
      } else {
        setIsHeaderShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle navigation to the landing page
  const handleLogoClick = () => {
    setCurrentView('list');
    setSelectedExam(null);
    setUserAnswers({});
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setFeedbackStatus('Sending...');
    try {
      const response = await fetch('http://localhost:3001/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedbackText }),
      });
      if (response.ok) {
        setFeedbackStatus('Feedback sent successfully!');
        setFeedbackText('');
        setTimeout(() => {
          setIsFeedbackOpen(false);
          setFeedbackStatus('');
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send feedback');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setFeedbackStatus('Currently not working. E-Mail: haug.johannes@icloud.com');
    }
  };

  return (
    <div className={`App ${isHeaderShrunk ? 'shrink' : ''} ${currentView}-view`}>
      <header className={`app-header ${isHeaderShrunk ? 'shrink' : ''}`}>
        <button 
          className={`logo ${isHeaderShrunk ? 'shrink' : ''}`}
          onClick={handleLogoClick}
        >
          eXam
        </button>
      </header>
      <main className="main-content">
        
        {currentView === 'list' && <ExamList exams={examsData} onSelectExam={handleSelectExam} />}
        {currentView === 'exam' && selectedExam && (
          <Exam 
            exam={selectedExam} 
            onSubmit={handleSubmitExam}
            onSubmitWithAI={handleSubmitExamWithAI}
          />
        )}
        {currentView === 'review' && selectedExam && (
          <Review 
            exam={selectedExam} 
            userAnswers={userAnswers} 
            aiReviews={aiReviews}
            onRestart={handleRestart} 
          />
        )}
      </main>
      <div className="feedback-container">
        <button className="feedback-button" onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
          Feedback
        </button>
        {isFeedbackOpen && (
          <div className="feedback-form">
            <h2>Provide Feedback</h2>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Enter your feedback here..."
                required
              />
              <button type="submit" disabled={feedbackStatus === 'Sending...'}>Submit</button>
              <button type="button" onClick={() => setIsFeedbackOpen(false)}>Close</button>
            </form>
            {feedbackStatus && <p className="feedback-status">{feedbackStatus}</p>}
          </div>
        )}
      </div>
      <footer className="app-footer">
        © {new Date().getFullYear()} eXam. Angaben ohne Gewähr.
      </footer>
    </div>
  );
}

export default App;
