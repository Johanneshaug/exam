import React from 'react';

function ExamList({ exams, onSelectExam }) {
  // Filter out exams with visible: false and group the rest by their tags
  const groupedExams = exams.reduce((acc, exam) => {
    if (exam.visible !== false) {  // Only include exams that are not explicitly set to invisible
      if (!acc[exam.tag]) {
        acc[exam.tag] = [];
      }
      acc[exam.tag].push(exam);
    }
    return acc;
  }, {});

  return (
    <div>
      <h2>Select an Exam</h2>
      {Object.keys(groupedExams).map((tag) => (
        <div key={tag}>
          <h3>{tag}</h3>
          <ul className="noBullets">
            {groupedExams[tag].map((exam) => (
              <li key={exam.id}>
                <button onClick={() => onSelectExam(exam)}>{exam.title}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ExamList;
