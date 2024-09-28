import React from 'react';

function ExamList({ exams, onSelectExam }) {
  return (
    <div>
      <h2>Select an Exam</h2>
      <ul className="noBullets">
        {exams.map((exam) => (
          <li key={exam.id}>
            <button onClick={() => onSelectExam(exam)}>{exam.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamList;
