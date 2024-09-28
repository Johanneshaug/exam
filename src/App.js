import React, { useState } from 'react';
import ExamList from './components/ExamList';
import Exam from './components/Exam';
import Review from './components/Review';
import examsData from './data/exams';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'exam', 'review'
  const [selectedExam, setSelectedExam] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  
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

  return (
    <div className="App">
      <button onClick={handleRestart} className="logo">eXam</button>
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
    </div>
  );
}

export default App;
