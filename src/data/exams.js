const exams = [
  {
    id: 1,
    title: 'Mathematics Exam',
    questions: [
      {
        type: 'text',
        id: 'q1',
        text: 'What is 2 + 2?',
        solution: '4',
      },
      {
        type: 'text',
        id: 'q2',
        text: 'Solve for x: 5x = 20',
        solution: 'x = 4',
      },
    ],
  },
  {
    id: 2,
    title: 'Science Exam',
    questions: [
      {
        type: 'text',
        id: 'q1',
        text: 'What planet is known as the Red Planet?',
        solution: 'Mars',
      },
      {
        type: 'text',
        id: 'q2',
        text: 'What is the chemical symbol for water?',
        solution: 'H₂O',
      },
    ],
  },
  {
    id: 3,
    title: 'History Exam',
    questions: [
      {
        type: 'multiple-choice',
        id: 'q1',
        text: 'How did Hitler die?',
        possibleAnswers: ['suicide', 'assassination', 'natural causes', 'accidental poisoning'],
        solution: 'suicide',
      },
      {
        type: 'text',
        id: 'q2',
        text: 'Where was Napoleon born?',
        solution: 'Corsica',
      },
    ],
  },
];

export default exams;
