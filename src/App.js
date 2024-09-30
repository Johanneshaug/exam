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
      <footer className="app-footer">
        © {new Date().getFullYear()} eXam. Angaben ohne Gewähr.
      </footer>
    </div>
  );
}

export default App;
