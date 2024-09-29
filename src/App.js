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

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setCurrentView('exam');
  };

  const handleSubmitExam = (answers) => {
    setUserAnswers(answers);
    setCurrentView('review');
  };

  const handleRestart = () => {
    setCurrentView('list');
    setSelectedExam(null);
    setUserAnswers({});
  };

  useEffect(() => {
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
    <div className={`App ${isHeaderShrunk ? 'shrink' : ''}`}>
      <header className={`app-header ${isHeaderShrunk ? 'shrink' : ''}`}>
        <button 
          className={`logo ${isHeaderShrunk ? 'shrink' : ''}`}
          onClick={handleLogoClick}
        >
          eXam
        </button>
      </header>
      <main>
        {currentView === 'list' && <ExamList exams={examsData} onSelectExam={handleSelectExam} />}
        {currentView === 'exam' && selectedExam && (
          <Exam exam={selectedExam} onSubmit={handleSubmitExam} />
        )}
        {currentView === 'review' && selectedExam && (
          <Review 
            exam={selectedExam} 
            userAnswers={userAnswers} 
            onRestart={handleRestart} 
          />
        )}
      </main>
      <footer className="app-footer">
        © {new Date().getFullYear()} eXam. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
