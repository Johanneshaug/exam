const exams = [
  {
    id: 1,
    title: 'Mathematics',
    tag: 'For testing purposes',
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
    title: 'Science',
    tag: 'For testing purposes',
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
    title: 'History',
    tag: 'For testing purposes',
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
  {
    id: 4,
    title: 'Verschuldung',
    tag: 'PuG',
    questions: [
      {
        type: 'text',
        id: 'q1',
        text: 'Was sollten Sie tun, wenn Sie mit Ihrem nächsten Gehalt Ihre Miete nicht bezahlen können?',
        solution: 'Sie sollten schnell einen Termin bei einer Schuldnerberatungsstelle vereinbaren.',
      },
      {
        type: 'multiple-choice',
        id: 'q2',
        text: 'Was ist eine häufige Ursache für Überschuldung bei jungen Menschen?',
        possibleAnswers: [
          'Ein Haus kaufen',
          'Ein Auto kaufen',
          'Lifestyle-Trends aus dem Fernsehen folgen',
          'In Aktien investieren'
        ],
        solution: 'Lifestyle-Trends aus dem Fernsehen folgen',
      },
      {
        type: 'text',
        id: 'q3',
        text: 'Was ist die Definition von "überschuldet" sein?',
        solution: 'Zahlungsverpflichtungen nicht mehr nachkommen können oder Zahlungen eingestellt haben.',
      },
      {
        type: 'multiple-choice',
        id: 'q4',
        text: 'Welche der folgenden Optionen wird NICHT als Ursache für Überschuldung aufgeführt?',
        possibleAnswers: [
          'Plötzliche Arbeitslosigkeit',
          'Anstieg der Miet- und Energiepreise',
          'Lottogewinn',
          'Geburt eines Kindes'
        ],
        solution: 'Lottogewinn',
      },
      {
        type: 'text',
        id: 'q5',
        text: 'Was ist die Aufgabe der Schufa Holding AG?',
        solution: 'Ihren Partnern Informationen über die Kreditwürdigkeit Dritter zur Verfügung zu stellen.',
      },
      {
        type: 'multiple-choice',
        id: 'q6',
        text: 'Was kann passieren, wenn Sie Ihre Schulden nicht bezahlen können?',
        possibleAnswers: [
          'Sie erhalten Mahnungen und möglicherweise Vollstreckungsbescheide.',
          'Ihr Arbeitgeber zahlt Ihr volles Gehalt.',
          'Ihre Bank erhöht Ihr Kreditlimit.',
          'Sie erhalten automatisch finanzielle Unterstützung vom Staat.'
        ],
        solution: 'Sie erhalten Mahnungen und möglicherweise Vollstreckungsbescheide.',
      },
    ],
  },
];

export default exams;
