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
    title: 'Verschuldung und SCHUFA',
    tag: 'PuG',
    questions: [
      {
        type: 'multiple-choice',
        id: 'q1',
        text: 'Was ist die primäre Aufgabe der SCHUFA?',
        possibleAnswers: [
          'Kreditvergabe an Privatpersonen',
          'Bonitätsprüfung und Kreditwürdigkeitsauskunft',
          'Schuldnerberatung',
          'Zwangsvollstreckung bei Zahlungsausfällen'
        ],
        solution: 'Bonitätsprüfung und Kreditwürdigkeitsauskunft',
      },
      {
        type: 'text',
        id: 'q2',
        text: 'Nennen Sie drei konkrete Maßnahmen, die eine überschuldete Person ergreifen kann, um ihre finanzielle Situation zu verbessern.',
        solution: '1. Schuldnerberatung aufsuchen, 2. Ausgaben reduzieren und Haushaltsbuch führen, 3. Umschuldung oder Verhandlung mit Gläubigern über Ratenzahlungen',
      },
      {
        type: 'multiple-choice',
        id: 'q3',
        text: 'Welche der folgenden Informationen wird NICHT von der SCHUFA gespeichert?',
        possibleAnswers: [
          'Kreditverträge',
          'Girokonten',
          'Gehaltseingänge',
          'Handyverträge'
        ],
        solution: 'Gehaltseingänge',
      },
      {
        type: 'text',
        id: 'q4',
        text: 'Erklären Sie den Begriff "Privatinsolvenz" und nennen Sie eine Voraussetzung für deren Beantragung.',
        solution: 'Privatinsolvenz ist ein gerichtliches Verfahren zur Entschuldung von Privatpersonen. Eine Voraussetzung ist die Zahlungsunfähigkeit oder drohende Zahlungsunfähigkeit.',
      },
      {
        type: 'multiple-choice',
        id: 'q5',
        text: 'Wie lange werden negative Einträge in der Regel bei der SCHUFA gespeichert?',
        possibleAnswers: [
          '1 Jahr',
          '3 Jahre',
          '5 Jahre',
          '10 Jahre'
        ],
        solution: '3 Jahre',
      },
      {
        type: 'text',
        id: 'q6',
        text: 'Was versteht man unter dem Begriff "Schuldenfalle" und nennen Sie ein konkretes Beispiel dafür.',
        solution: 'Eine Schuldenfalle ist eine Situation, in der man durch Schulden in eine finanzielle Abwärtsspirale gerät. Ein Beispiel ist die Aufnahme neuer Kredite zur Tilgung bestehender Schulden, wodurch die Gesamtverschuldung stetig wächst.',
      },
      {
        type: 'multiple-choice',
        id: 'q7',
        text: 'Welches Recht haben Sie laut DSGVO bezüglich Ihrer SCHUFA-Daten?',
        possibleAnswers: [
          'Recht auf Vergessen',
          'Recht auf Datenübertragbarkeit',
          'Recht auf Auskunft',
          'Alle genannten Rechte'
        ],
        solution: 'Alle genannten Rechte',
      },
      {
        type: 'text',
        id: 'q8',
        text: 'Erklären Sie den Unterschied zwischen einem Dispositionskredit und einem Ratenkredit.',
        solution: 'Ein Dispositionskredit ist ein flexibler Kreditrahmen auf dem Girokonto, der kurzfristig genutzt werden kann. Ein Ratenkredit ist ein fest vereinbarter Kredit mit festen Laufzeiten und Raten.',
      },
      {
        type: 'multiple-choice',
        id: 'q9',
        text: 'Was ist NICHT Teil des SCHUFA-Scores?',
        possibleAnswers: [
          'Anzahl der Kreditanfragen',
          'Alter des ältesten Kreditkontos',
          'Einkommen',
          'Zahlungsverhalten'
        ],
        solution: 'Einkommen',
      },
      {
        type: 'text',
        id: 'q10',
        text: 'Was ist der P-Konto-Schutz und wofür dient er?',
        solution: 'Der P-Konto-Schutz (Pfändungsschutzkonto) ist ein gesetzlicher Schutz, der sicherstellt, dass Schuldner trotz Kontopfändung über einen bestimmten Grundfreibetrag verfügen können, um ihren Lebensunterhalt zu bestreiten.',
      },
      {
        type: 'multiple-choice',
        id: 'q11',
        text: 'Welche Aussage zur Restschuldbefreiung ist korrekt?',
        possibleAnswers: [
          'Sie tritt automatisch nach 3 Jahren ein',
          'Sie muss beim Insolvenzgericht beantragt werden',
          'Sie gilt nur für Unternehmen',
          'Sie löscht alle Schulden sofort'
        ],
        solution: 'Sie muss beim Insolvenzgericht beantragt werden',
      },
      {
        type: 'text',
        id: 'q12',
        text: 'Was ist eine Bürgschaft und welches Risiko birgt sie für den Bürgen?',
        solution: 'Eine Bürgschaft ist eine Garantie, bei der sich der Bürge verpflichtet, für die Schulden eines anderen einzustehen. Das Risiko für den Bürgen besteht darin, dass er die volle Schuld übernehmen muss, wenn der Hauptschuldner nicht zahlen kann.',
      },
      {
        type: 'multiple-choice',
        id: 'q13',
        text: 'Welche Maßnahme ist KEINE geeignete Strategie zur Schuldenprävention?',
        possibleAnswers: [
          'Regelmäßiges Sparen',
          'Budgetplanung',
          'Kreditaufnahme zur Investition',
          'Finanzielle Bildung'
        ],
        solution: 'Kreditaufnahme zur Investition',
      },
      {
        type: 'text',
        id: 'q14',
        text: 'Was versteht man unter dem Begriff "Schuldenregulierung" und nennen Sie zwei mögliche Maßnahmen.',
        solution: 'Schuldenregulierung bezeichnet Maßnahmen zur Bewältigung von Überschuldung. Mögliche Maßnahmen sind: 1. Umschuldung (Zusammenfassung mehrerer Kredite), 2. Verhandlung von Ratenzahlungen oder Schuldenerlass mit Gläubigern.',
      },
      {
        type: 'multiple-choice',
        id: 'q15',
        text: 'Welcher Faktor hat den größten Einfluss auf den SCHUFA-Score?',
        possibleAnswers: [
          'Alter',
          'Wohnort',
          'Zahlungsverhalten',
          'Anzahl der Kreditkarten'
        ],
        solution: 'Zahlungsverhalten',
      },
      {
        type: 'text',
        id: 'q16',
        text: 'Was ist der Unterschied zwischen Zahlungsunfähigkeit und Überschuldung?',
        solution: 'Zahlungsunfähigkeit bedeutet, dass man seinen fälligen Zahlungsverpflichtungen nicht nachkommen kann. Überschuldung liegt vor, wenn das Vermögen die bestehenden Verbindlichkeiten nicht mehr deckt, auch wenn man aktuell noch Zahlungen leisten kann.',
      },
      {
        type: 'multiple-choice',
        id: 'q17',
        text: 'Welche Aussage zur Schuldnerberatung ist korrekt?',
        possibleAnswers: [
          'Sie ist immer kostenpflichtig',
          'Sie kann nur von Privatpersonen in Anspruch genommen werden',
          'Sie garantiert eine sofortige Schuldentilgung',
          'Sie bietet Unterstützung bei der Analyse der finanziellen Situation und Entwicklung von Lösungsstrategien'
        ],
        solution: 'Sie bietet Unterstützung bei der Analyse der finanziellen Situation und Entwicklung von Lösungsstrategien',
      },
      {
        type: 'text',
        id: 'q18',
        text: 'Was ist eine Lohnabtretung und welche Konsequenzen hat sie für den Schuldner?',
        solution: 'Eine Lohnabtretung ist eine vertragliche Vereinbarung, bei der ein Teil des Gehalts direkt an den Gläubiger gezahlt wird. Für den Schuldner bedeutet dies eine Reduzierung des verfügbaren Einkommens und möglicherweise Schwierigkeiten, laufende Kosten zu decken.',
      },
      {
        type: 'multiple-choice',
        id: 'q19',
        text: 'Was ist KEIN typisches Anzeichen für eine drohende Überschuldung?',
        possibleAnswers: [
          'Regelmäßige Nutzung des Dispokredits',
          'Zahlungsrückstände bei Rechnungen',
          'Aufnahme neuer Kredite zur Tilgung alter Schulden',
          'Regelmäßiges Sparen eines festen Betrags'
        ],
        solution: 'Regelmäßiges Sparen eines festen Betrags',
      },
      {
        type: 'text',
        id: 'q20',
        text: 'Was versteht man unter einer Verjährung von Schulden und wie lange ist die reguläre Verjährungsfrist?',
        solution: 'Die Verjährung von Schulden bedeutet, dass nach Ablauf einer bestimmten Frist der Gläubiger seinen Anspruch nicht mehr gerichtlich durchsetzen kann. Die reguläre Verjährungsfrist beträgt in Deutschland 3 Jahre.',
      },
    ],
  },
  {
    id: 5,
    title: 'Use-Case Diagramme',
    tag: 'UML',
    questions: [
      {
        type: 'text',
        id: 'q1',
        text: 'Was ist der Hauptzweck eines Use-Case Diagramms?',
        solution: 'Use-Case Diagramme dienen dazu, die Funktionalität eines Systems aus der Perspektive der Benutzer darzustellen. Sie zeigen, welche Akteure mit welchen Anwendungsfällen interagieren.',
      },
      {
        type: 'multiple-choice',
        id: 'q2',
        text: 'Welches Symbol wird in Use-Case Diagrammen verwendet, um einen Akteur darzustellen?',
        possibleAnswers: [
          'Ein Rechteck',
          'Ein Oval',
          'Ein Strichmännchen',
          'Ein Dreieck'
        ],
        solution: 'Ein Strichmännchen',
      },
      {
        type: 'text',
        id: 'q3',
        text: 'Was ist der Unterschied zwischen einem Akteur und einem Use-Case in einem Use-Case Diagramm?',
        solution: 'Ein Akteur ist eine externe Entität (Person, System oder Gerät), die mit dem System interagiert, während ein Use-Case eine spezifische Funktionalität oder einen Anwendungsfall des Systems repräsentiert.',
      },
      {
        type: 'multiple-choice',
        id: 'q4',
        text: 'Welche Art von Beziehung wird verwendet, um anzuzeigen, dass ein Use-Case einen anderen Use-Case erweitert?',
        possibleAnswers: [
          'Include',
          'Extend',
          'Generalization',
          'Association'
        ],
        solution: 'Extend',
      },
      {
        type: 'text',
        id: 'q5',
        text: 'Erklären Sie den Unterschied zwischen "include" und "extend" Beziehungen in Use-Case Diagrammen.',
        solution: '"Include" bedeutet, dass ein Use-Case einen anderen Use-Case als Teil seiner normalen Ausführung einbezieht. "Extend" bedeutet, dass ein Use-Case optional einen anderen Use-Case erweitert oder ergänzt, abhängig von bestimmten Bedingungen.',
      },
      {
        type: 'multiple-choice',
        id: 'q6',
        text: 'Wie wird ein Systemgrenze in einem Use-Case Diagramm dargestellt?',
        possibleAnswers: [
          'Als gestrichelte Linie',
          'Als durchgezogene Linie',
          'Als Rechteck um die Use-Cases',
          'Als Kreis um die Akteure'
        ],
        solution: 'Als Rechteck um die Use-Cases',
      },
      {
        type: 'text',
        id: 'q7',
        text: 'Was ist der Zweck einer Generalisierungsbeziehung in einem Use-Case Diagramm?',
        solution: 'Eine Generalisierungsbeziehung wird verwendet, um eine Vererbungshierarchie zwischen Akteuren oder zwischen Use-Cases darzustellen. Sie zeigt, dass ein speziellerer Akteur oder Use-Case die Eigenschaften eines allgemeineren erbt.',
      },
      {
        type: 'multiple-choice',
        id: 'q8',
        text: 'Welches der folgenden Elemente gehört NICHT zu einem Use-Case Diagramm?',
        possibleAnswers: [
          'Akteur',
          'Use-Case',
          'Klasse',
          'Systemgrenze'
        ],
        solution: 'Klasse',
      },
    ],
  }
];

export default exams;
