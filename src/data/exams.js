const exams = [
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
        text: 'Nennen Sie 3 konkrete Maßnahmen, die eine überschuldete Person ergreifen kann, um ihre finanzielle Situation zu verbessern.',
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
  },
  {
    id: 6,
    title: 'Unglaubliche Fakten',
    tag: 'KI-Generiert',
    visible: false,
    questions: [
      {
        type: 'multiple-choice',
        id: 'q1',
        text: 'Welche unerwartete Entdeckung machten Archäologen kürzlich unter dem Brandenburger Tor?',
        possibleAnswers: [
          'Ein unterirdisches Bunkersystem aus dem Kalten Krieg',
          'Eine antike römische Siedlung',
          'Ein verborgenes Bernsteinzimmer',
          'Ein funktionierendes U-Bahn-Netz aus dem 19. Jahrhundert'
        ],
        solution: 'Ein funktionierendes U-Bahn-Netz aus dem 19. Jahrhundert',
      },
      {
        type: 'multiple-choice',
        id: 'q2',
        text: 'Welche überraschende Fähigkeit wurde bei einer Studie an der Universität Heidelberg bei Tauben entdeckt?',
        possibleAnswers: [
          'Sie können komplexe mathematische Gleichungen lösen',
          'Sie besitzen ein fotografisches Gedächtnis',
          'Sie können menschliche Sprache verstehen und übersetzen',
          'Sie können Gesichter besser erkennen als KI-Systeme'
        ],
        solution: 'Sie können Gesichter besser erkennen als KI-Systeme',
      },
      {
        type: 'multiple-choice',
        id: 'q3',
        text: 'Welche unerwartete Nebenwirkung wurde bei einem neuen Haarwuchsmittel festgestellt?',
        possibleAnswers: [
          'Es verlängert die Lebensdauer um durchschnittlich 10 Jahre',
          'Es verbessert die Sehkraft erheblich',
          'Es ermöglicht das Verstehen von Tiersprachen',
          'Es steigert die mathematischen Fähigkeiten drastisch'
        ],
        solution: 'Es steigert die mathematischen Fähigkeiten drastisch',
      },
      {
        type: 'multiple-choice',
        id: 'q4',
        text: 'Welche erstaunliche Entdeckung machten Wissenschaftler über die Zusammensetzung des Mondes?',
        possibleAnswers: [
          'Er besteht zu 30% aus Käse',
          'Er enthält große Mengen an Diamanten',
          'Er hat einen flüssigen Kern aus Quecksilber',
          'Er besitzt ein eigenes Magnetfeld, stärker als das der Erde'
        ],
        solution: 'Er besitzt ein eigenes Magnetfeld, stärker als das der Erde',
      },
      {
        type: 'multiple-choice',
        id: 'q5',
        text: 'Welche unglaubliche Fähigkeit entwickelten Menschen in einer isolierten Gemeinschaft in den Alpen?',
        possibleAnswers: [
          'Sie können im Schlaf lernen',
          'Sie altern rückwärts ab dem 50. Lebensjahr',
          'Sie können Gedanken telepathisch übertragen',
          'Sie können Temperaturen unter 0°C ohne Hilfsmittel überleben'
        ],
        solution: 'Sie können Temperaturen unter 0°C ohne Hilfsmittel überleben',
      },
    ],
  },
  {
    id: 7,
    title: 'IPv6',
    tag: 'Netzwerke',
    questions: [
      {
        type: 'multiple-choice',
        id: 'q2',
        text: 'Wie viele Bits hat eine IPv6-Adresse im Vergleich zu einer IPv4-Adresse?',
        possibleAnswers: [
          '32 Bits (IPv6) vs. 128 Bits (IPv4)',
          '64 Bits (IPv6) vs. 32 Bits (IPv4)',
          '128 Bits (IPv6) vs. 32 Bits (IPv4)',
          '256 Bits (IPv6) vs. 64 Bits (IPv4)'
        ],
        solution: '128 Bits (IPv6) vs. 32 Bits (IPv4)',
      },
      {
        type: 'multiple-choice',
        id: 'q4',
        text: 'Welche Funktion gibt es in IPv6, die das Netzwerk-Address-Translation (NAT) von IPv4 größtenteils überflüssig macht?',
        possibleAnswers: [
          'IPsec',
          'Stateless Address Autoconfiguration (SLAAC)',
          'Quality of Service (QoS)',
          'Multicast'
        ],
        solution: 'Stateless Address Autoconfiguration (SLAAC)',
      },
      {
        type: 'multiple-choice',
        id: 'q6',
        text: 'Welches Protokoll ersetzt ARP (Address Resolution Protocol) in IPv6?',
        possibleAnswers: [
          'RARP',
          'NDP',
          'ICMP',
          'DHCP'
        ],
        solution: 'NDP',
      },
      {
        type: 'text',
        id: 'q7',
        text: 'Erklären Sie den Begriff "IPv6 Tunneling" und wozu es verwendet wird.',
        solution: 'IPv6 Tunneling ist eine Methode, um IPv6-Pakete über ein IPv4-Netzwerk zu transportieren. Es wird verwendet, um IPv6-Konnektivität in Netzwerken zu ermöglichen, die noch nicht vollständig auf IPv6 umgestellt sind, indem IPv6-Pakete in IPv4-Pakete eingekapselt werden.',
      },
      {
        type: 'multiple-choice',
        id: 'q8',
        text: 'Welche Sicherheitsfunktion ist in IPv6 standardmäßig integriert?',
        possibleAnswers: [
          'SSL/TLS',
          'IPsec',
          'WPA3',
          'OpenVPN'
        ],
        solution: 'IPsec',
      },
      {
        type: 'text',
        id: 'q9',
        text: 'Was macht IPsec?',
        solution: 'IPsec sorgt für Authentizität, Integrität und Vertraulichkeit von Daten in IP-Netzwerken durch Verschlüsselung und Authentifizierungsprotokolle.',
      },
      {
        type: 'text',
        id: 'q10',
        text: 'Was ist der Unterschied zwischen Unicast, Multicast und Anycast in IPv6?',
        solution: 'Unicast sendet Daten an einen einzelnen Empfänger. Multicast sendet Daten an eine Gruppe von Empfängern. Anycast sendet Daten an den nächstgelegenen Empfänger einer Gruppe. IPv6 unterstützt alle drei Arten nativ, während IPv4 hauptsächlich für Unicast optimiert ist.',
      },
      {
        type: 'multiple-choice',
        id: 'q11',
        text: 'Welche Aussage über die Fragmentierung von Paketen in IPv6 ist korrekt?',
        possibleAnswers: [
          'Fragmentierung ist in IPv6 nicht erlaubt',
          'Fragmentierung wird nur vom Sender durchgeführt, nicht von Routern',
          'Fragmentierung funktioniert genauso wie in IPv4',
          'Fragmentierung wird ausschließlich von Routern durchgeführt'
        ],
        solution: 'Fragmentierung wird nur vom Sender durchgeführt, nicht von Routern',
      },
      {
        type: 'text',
        id: 'q12',
        text: 'Was bedeutet IANA?',
        solution: 'Internet Assigned Numbers Authority.',
      },
      {
        type: 'multiple-choice',
        id: 'q13',
        text: 'Wann hat die europäische IP-Adressverwaltung Réseaux IP Européens ihren letzten IPv4 Bereich (/22) zugeteilt?',
        possibleAnswers: [
          '2019',
          '2020',
          '2021',
          '2022'
        ],
        solution: '2019',
      },
      {
        type: 'text',
        id: 'q14',
        text: 'Welche beiden Protokolle werden in IPV6 nicht mehr gebraucht und warum?',
        solution: 'NAT und PAT werden in IPV6 nicht mehr gebraucht, weil jedes Gerät eine eindeutige globale IP-Adresse hat.',
      },
      {
        type: 'text',
        id: 'q15',
        text: 'Was ist ein "Dualstack"?',
        solution: 'Ist eine Netzwerktechnologie, bei der sowohl IPv4 als auch IPv6 auf einem Netzwerk betrieben werden kann.',
      },
      {
        type: 'multiple-choice',
        id: 'q16',
        text: 'Was wurde in IPV6 vereinfacht?',
        possibleAnswers: [
          'Adressvergabe',
          'Headeraufbau',
          'Fragmentierung',
          'Sicherheitsprotokoll'
        ],
        solution: 'Headeraufbau',
      },
      {
        type: 'text',
        id: 'q17',
        text: 'In welche 2 Teile ist eine IPv6-Adresse aufgeteilt?',
        solution: 'Präfix und Interface-ID',
      },
      {
        type: 'text',
        id: 'q18',
        text: 'Was beschreibt der Präfix einer IPv6-Adresse?',
        solution: 'Die Präfixe beschreiben das Netz/Subnetz.',
      },
      {
        type: 'text',
        id: 'q19',
        text: 'Was beschreibt die Interface-ID?',
        solution: 'Die Interface-ID beschreibt das Gerät/die Schnittstelle.',
      },
      {
        type: 'text',
        id: 'q20',
        text: 'Wie viele Bits hat ein Hexadezimalwert?',
        solution: '4 Bits',
      },
      {
        type: 'text',
        id: 'q21',
        text: 'Welche Regeln gelten für das Verkürzen der IPv6-Adresse?',
        solution: 'Eine IPv6-Adresse kann verkürzt werden, indem führende Nullen in jedem Hexadezimal-Block weggelassen und durchgehende Blöcke von Nullen durch "::" ersetzt werden, aber nur einmal pro Adresse.',
      },
      {
        type: 'text',
        id: 'q22',
        text: 'Wie werden IPV6 URLs dargestellt?',
        solution: 'In eckigen Klammern, z.B. http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]',
      },
      {
        type: 'multiple-choice',
        id: 'q23',
        text: 'Was ist kein gültiger Scope einer IPv6-Adresse?',
        possibleAnswers: [
          'Host-Scope (::1)',
          'Link-Local Scope (fe80)',
          'Multicast Scope (ff)',
          'Regional-Scope (fa)',
          'Unique-Local-Scope (fc00 und fd80)',
          'Site-Local-Scope (fec0)',
          'Global-Scope (2, 3, ...)'
        ],
        solution: 'Regional-Scope',
      },
      {
        type: 'text',
        id: 'q24',
        text: 'Was ersetzt APIPA bei IPV6',
        solution: 'Die Link-Local-Adresse'
      },
      {
        "type": "text",
        "id": "q25",
        "text": "Wie funktioniert die IPv4-IPv6-Abwärtskompatibilität?",
        "solution": "Durch das Präfix ::ffff: gefolgt von der IPv4-Adresse in hexadezimaler Form."
      },
      {
        "type": "text",
        "id": "q26",
        "text": "Auf welcher OSI-Schicht arbeitet IPV6?",
        "solution": "Layer 3."
      },
      {
        "type": "text",
        "id": "q28",
        "text": "Warum verwendet man den Befehl: Ping ::1",
        "solution": "Um Pakete an das Loopbackinterface zu schicken und um schauen ob IPV6funktioniert"
      },
      {
        "type": "text",
        "id": "q29",
        "text": "Welcher Adresstyp wird als öffentliche IPV6 verwendet",
        "solution": "Global Unicast"
      },
      {
        "type": "text",
        "id": "q30",
        "text": "Wodurch wird die Broadcastadresse in IPV6 ersetzt",
        "solution": "Durch die Multicastadresse"
      },
      {
        "type": "text",
        "id": "q33",
        "text": "Was machen Privacy-Extensions",
        "solution": "Privacy Extensions generieren temporäre IPv6-Adressen"
      },
    ],
  },
  {
    id: 8,
    title: 'Englisch Vokabeltest',
    tag: 'BS+',
    visible: true,
    questions: [
      {
        type: 'text',
        id: 'q1',
        text: 'Straßenbahn',
        solution: 'tram, street car',
      },
      {
        type: 'text',
        id: 'q2',
        text: 'Hauptverkehrszeit',
        solution: 'rush hour',
      },
      {
        type: 'text',
        id: 'q3',
        text: 'S-Bahn',
        solution: 'Suburban train',
      },
      {
        type: 'multiple-choice',
        id: 'q4',
        text: 'Welche erstaunliche Entdeckung machten Wissenschaftler über die Zusammensetzung des Mondes?',
        possibleAnswers: [
          'Er besteht zu 30% aus Käse',
          'Er enthält große Mengen an Diamanten',
          'Er hat einen flüssigen Kern aus Quecksilber',
          'Er besitzt ein eigenes Magnetfeld, stärker als das der Erde'
        ],
        solution: 'Er besitzt ein eigenes Magnetfeld, stärker als das der Erde',
      },
      {
        type: 'multiple-choice',
        id: 'q5',
        text: 'Welche unglaubliche Fähigkeit entwickelten Menschen in einer isolierten Gemeinschaft in den Alpen?',
        possibleAnswers: [
          'Sie können im Schlaf lernen',
          'Sie altern rückwärts ab dem 50. Lebensjahr',
          'Sie können Gedanken telepathisch übertragen',
          'Sie können Temperaturen unter 0°C ohne Hilfsmittel überleben'
        ],
        solution: 'Sie können Temperaturen unter 0°C ohne Hilfsmittel überleben',
      },
    ],
  },
  {
    id: 9,
    title: 'Schulaufgabe',
    tag: 'FU-IT',
    questions: [
      {
        type: 'multiple-choice',
        id: 'q1',
        text: 'Welche beiden Arten von Virtualisierungen gibt es?',
        possibleAnswers: [
          'Netzwerkvirtualisierung',
          'Betriebssystemvirtualisierung',
          'Datenvirtualisierung',
          'Hardwarevirtualisierung'
        ],
        solution: ['Betriebssystemvirtualisierung', 'Hardwarevirtualisierung'],
      },
      {
        type: 'multiple-choice',
        id: 'q2',
        text: 'Welchen Zweck hat die Betriebssystemvirtualisierung?',
        possibleAnswers: [
          'Die Sicherheit zu erhöhen',
          'Anwendungen ohne Kenntnisse der Programmierung auf beliebigen Systemen starten zu können',
          'Hardware-Ressourcen zu sparen',
          'Die Netzwerkgeschwindigkeit zu verbessern'
        ],
        solution: ['Anwendungen ohne Kenntnisse der Programmierung auf beliebigen Systemen starten zu können'],
      },
      {
        type: 'multiple-choice',
        id: 'q3',
        text: 'Was macht Vagrant?',
        possibleAnswers: [
          'Vagrant optimiert die Netzwerkgeschwindigkeit.',
          'Vagrant erstellt und verwaltet virtuelle Entwicklungsumgebungen.',
          'Vagrant ist ein Backup-Tool für virtuelle Maschinen.',
          'Vagrant ist ein Virtualisierungs-Tool für Server.'
        ],
        solution: 'Vagrant erstellt und verwaltet virtuelle Entwicklungsumgebungen.',
      },
      {
        type: 'multiple-choice',
        id: 'q4',
        text: 'Was bezeichnet der Begriff Virtualisierung?',
        possibleAnswers: [
          'Die Verbesserung der Datensicherheit.',
          'Die Nachbildung eines Hard- oder Software-Objekts durch ein ähnliches Objekt vom selben Typ mit Hilfe einer Abstraktionsschicht.',
          'Die Erhöhung der Hardware-Leistung.',
          'Die Reduzierung des Stromverbrauchs.'
        ],
        solution: 'Die Nachbildung eines Hard- oder Software-Objekts durch ein ähnliches Objekt vom selben Typ mit Hilfe einer Abstraktionsschicht.',
      },
      {
        type: 'multiple-choice',
        id: 'q5',
        text: 'Was sind 3 Vorteile der Virtualisierung über Server?',
        possibleAnswers: [
          'Geringerer Stromverbrauch für Betrieb und Kühlung',
          'Erhöhte Hardwarekosten',
          'Effektive Aufteilung von Speichermedien',
          'Verbesserte Prozessor-Auslastung der Server'
        ],
        solution: ['Verbesserte Prozessor-Auslastung der Server', 'Effektive Aufteilung von Speichermedien', 'Geringerer Stromverbrauch für Betrieb und Kühlung'],
      },
      {
        type: 'multiple-choice',
        id: 'q6',
        text: 'Was macht der Host?',
        possibleAnswers: [
          'Er ist der Rechner, der die virtuellen Maschinen verwaltet.',
          'Er ist der Rechner, auf dem die virtuellen Maschinen laufen.',
          'Er ist der Rechner, der die virtuellen Maschinen erstellt.',
          'Er ist der Rechner, der die virtuellen Maschinen sichert.'
        ],
        solution: 'Er ist der Rechner, auf dem die virtuellen Maschinen laufen.',
      },
      {
        type: 'multiple-choice',
        id: 'q7',
        text: 'Was macht der Guest?',
        possibleAnswers: [
          'Ist der Benutzer, der die virtuelle Maschine steuert.',
          'Ist die Software, die die virtuelle Maschine erstellt.',
          'Ist eine lauffähige/laufende virtuelle Maschine.',
          'Ist ein Netzwerkgerät, das die virtuelle Maschine unterstützt.'
        ],
        solution: 'Ist eine lauffähige/laufende virtuelle Maschine.',
      },
      {
        type: 'multiple-choice',
        id: 'q8',
        text: 'Was ist die Virtual Machine Monitor?',
        possibleAnswers: [
          'Ein Backup-Tool für virtuelle Maschinen.',
          'Steuerungssoftware für Verwaltung von Guests und Host-Ressourcen.',
          'Eine Software zur Überwachung der Hardware-Ressourcen.',
          'Ein Hardwaregerät zur Verbesserung der Netzwerkgeschwindigkeit.'
        ],
        solution: 'Steuerungssoftware für Verwaltung von Guests und Host-Ressourcen.',
      },
      {
        type: 'multiple-choice',
        id: 'q9',
        text: 'Welche Virtualisierungsarten gibt es und was machen diese?',
        possibleAnswers: [
          'Bare-Metal: Hypervisor läuft direkt auf der verfügbaren Hardware.',
          'Host: VMM wird als Anwendung auf Host-Betriebssystem gestartet.',
          'Voll-Virtualisierung: Jedem Gastbetriebssystem steht ein eigener virtueller Rechner mit virtuellen Ressourcen zur Verfügung.',
          'Para-Virtualisierung: Dem Gastbetriebssystem stehen direkte low-level virtualisierte Hardware-Ressourcen zur Verfügung.'
        ],
        solution: 'Voll-Virtualisierung: Jedem Gastbetriebssystem steht ein eigener virtueller Rechner mit virtuellen Ressourcen zur Verfügung.',
      },
      {
        type: 'multiple-choice',
        id: 'q10',
        text: 'Was macht die Baremetal-Virtualisierung?',
        possibleAnswers: [
          'Hypervisor ist eine Software, die auf einem virtuellen Server läuft.',
          'Hypervisor läuft direkt auf der verfügbaren Hardware.',
          'Hypervisor nutzt Treiber eines Host-Betriebssystems.',
          'Hypervisor ist ein Netzwerkgerät.'
        ],
        solution: 'Hypervisor läuft direkt auf der verfügbaren Hardware.',
      },
      {
        type: 'multiple-choice',
        id: 'q11',
        text: 'Was macht die Host-Virtualisierung?',
        possibleAnswers: [
          'Erfordert keine Hardware-Ressourcen.',
          'VMM wird als Anwendung auf Host-Betriebssystem gestartet.',
          'Geringere Skalierbarkeit wegen Abhängigkeit zum Host-Betriebssystem.',
          'Größerer Overhead als Bare-Metal.'
        ],
        solution: 'VMM wird als Anwendung auf Host-Betriebssystem gestartet.',
      },
      {
        type: 'multiple-choice',
        id: 'q12',
        text: 'Was ist Memory Balloning?',
        possibleAnswers: [
          'Sorgt dafür, dass der Hauptspeicher dynamisch vergrößert wird.',
          'Reduziert die CPU-Auslastung.',
          'Erhöht die Netzwerkgeschwindigkeit.',
          'Verringert den Stromverbrauch.'
        ],
        solution: 'Sorgt dafür, dass der Hauptspeicher dynamisch vergrößert wird.',
      },
      {
        type: 'multiple-choice',
        id: 'q13',
        text: 'Was ist die Live Migration?',
        possibleAnswers: [
          'Eine Virtuelle Maschine wird ohne Unterbrechung von einem physischen Server auf einen anderen übertragen.',
          'Eine virtuelle Maschine wird heruntergefahren und dann auf einen anderen Server übertragen.',
          'Eine virtuelle Maschine wird in den Ruhezustand versetzt.',
          'Eine virtuelle Maschine wird gelöscht und neu erstellt.'
        ],
        solution: 'Eine Virtuelle Maschine wird ohne Unterbrechung von einem physischen Server auf einen anderen übertragen.',
      },
      {
        type: 'multiple-choice',
        id: 'q14',
        text: 'Was ist ein Hypervisor?',
        possibleAnswers: [
          'Eine Software oder Hardware, die es ermöglicht, mehrere virtuelle Maschinen gleichzeitig auf einem physischen Host-System auszuführen.',
          'Ein Netzwerkgerät zur Verbesserung der Sicherheit.',
          'Ein Backup-Tool für virtuelle Maschinen.',
          'Eine Software zur Überwachung von Hardware-Ressourcen.'
        ],
        solution: 'Eine Software oder Hardware, die es ermöglicht, mehrere virtuelle Maschinen gleichzeitig auf einem physischen Host-System auszuführen.',
      },
      {
        type: 'multiple-choice',
        id: 'q15',
        text: 'Wie werden Container isoliert?',
        possibleAnswers: [
          'Isolation des Prozesses durch Kernel Namespaces.',
          'Durch Hardware-Trennung.',
          'Durch Netzwerk-Trennung.',
          'Durch Software-Trennung.'
        ],
        solution: 'Isolation des Prozesses durch Kernel Namespaces.',
      },
      {
        type: 'multiple-choice',
        id: 'q16',
        text: 'Welche Auswirkungen hat eine Betriebssystemvirtualisierung auf das System?',
        possibleAnswers: [
          'Zusätzliche Belastung, die kaum messbar ist.',
          'Erhöht die Hardwarekosten.',
          'Verringert die Sicherheit.',
          'Erhöht die Komplexität des Systems.'
        ],
        solution: 'Zusätzliche Belastung, die kaum messbar ist.',
      },
      {
        type: 'multiple-choice',
        id: 'q17',
        text: 'Was ist der Unterschied zwischen Hardware- und Betriebssystemvirtualisierung?',
        possibleAnswers: [
          'Hardwarevirtualisierung benötigt Hardwareunterstützung, Betriebssystemvirtualisierung ist eine reine Softwarelösung.',
          'Betriebssystemvirtualisierung ist schneller.',
          'Hardwarevirtualisierung ist sicherer.',
          'Betriebssystemvirtualisierung benötigt mehr Ressourcen.'
        ],
        solution: 'Hardwarevirtualisierung benötigt Hardwareunterstützung, Betriebssystemvirtualisierung ist eine reine Softwarelösung.',
      },
      {
        type: 'multiple-choice',
        id: 'q18',
        text: 'Was macht die Dockerfile?',
        possibleAnswers: [
          'Beschreibt das Image, aus dem die Container erzeugt werden.',
          'Erstellt virtuelle Maschinen.',
          'Optimiert die Netzwerkgeschwindigkeit.',
          'Sichert Daten in der Cloud.'
        ],
        solution: 'Beschreibt das Image, aus dem die Container erzeugt werden.',
      },
      {
        type: 'multiple-choice',
        id: 'q19',
        text: 'Was wird dabei automatisiert?',
        possibleAnswers: [
          'Konfiguration des Images und der daraus resultierenden Container.',
          'Die Erstellung von Hardware-Ressourcen.',
          'Die Überwachung von Netzwerkverbindungen.',
          'Die Sicherung von Daten.'
        ],
        solution: 'Konfiguration des Images und der daraus resultierenden Container.',
      },
      {
        type: 'multiple-choice',
        id: 'q20',
        text: 'Kann ein Image auch so erzeugt werden?',
        possibleAnswers: [
          'Ja.',
          'Nein.',
          'Nur mit speziellen Tools.',
          'Nur in der Cloud.'
        ],
        solution: 'Ja.',
      },
    ],
  }
];

export default exams;