export const eventFilters = [
  { key: 'All', label: 'EVERYTHING' },
  { key: 'WORKSHOP', label: 'WORKSHOP' },
  { key: 'HACKATHON', label: 'HACKATHON' },
  { key: 'SEMINAR', label: 'SEMINAR' }
];

export const events = [
  {
    id: 'w1',
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'TOPIC · TBA',
    title: 'Workshop 01',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Hands-on, laptops open, taken by an industry specialist. Topic being finalised — the format is not.',
    detail: 'First of three workshops this term, conducted end-to-end by an industry specialist. The topic is being locked in; the format is fixed — you build along live and you leave with it running.',
    meta: [
      { k: 'CONDUCTED BY', v: 'Industry specialist' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'w2',
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'TOPIC · TBA',
    title: 'Workshop 02',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Second in the series — picks up where the first stops. Industry specialist, hands-on throughout.',
    detail: 'The second workshop builds on the first. Topic follows once the series is locked with the specialists conducting it.',
    meta: [
      { k: 'CONDUCTED BY', v: 'Industry specialist' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'w3',
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'TOPIC · TBA',
    title: 'Workshop 03',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Closes the series — the most advanced of the three. Industry specialist, hands-on throughout.',
    detail: 'The final workshop of the series and the deepest. Topic to be announced with the rest of the series.',
    meta: [
      { k: 'CONDUCTED BY', v: 'Industry specialist' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'h1',
    tag: 'HACKATHON',
    kind: 'HACKATHON',
    status: 'FLAGSHIP',
    title: 'ADG Hackathon',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'The flagship. Teams, a live brief, and a working demo or it does not count.',
    detail: 'The one marquee event of the term. Teams build against a brief released at the start; judging weighs a working demo over a pretty deck. Dates, venue and team size will be announced.',
    meta: [
      { k: 'FORMAT', v: 'Team event' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A shipped project under time pressure', 'A judged entry for your CV']
  },
  {
    id: 's1',
    tag: 'SEMINAR',
    kind: 'SEMINAR',
    status: 'PLANNED',
    title: 'Seminar 01',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'One speaker worth the hour — on how AI/ML actually gets built outside the classroom.',
    detail: 'A sit-down session with an industry or academic guest. Speaker and topic will be announced together with the date.',
    meta: [
      { k: 'FORMAT', v: 'Talk + Q&A' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['Notes published afterwards', 'Q&A time that is actually enough']
  },
  {
    id: 's2',
    tag: 'SEMINAR',
    kind: 'SEMINAR',
    status: 'TENTATIVE',
    title: 'Seminar 02',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'A possible second seminar — pencilled in, honestly labelled.',
    detail: 'Held as tentative until the term calendar settles. If it runs: one good speaker, one focused hour, published notes.',
    meta: [
      { k: 'FORMAT', v: 'Talk + Q&A' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['Notes published afterwards', 'Q&A time that is actually enough']
  }
];

export const operatingPrinciples = [
  'Scheduled around the academic calendar — nothing inside mid-sems, practicals, festival breaks or end-sems.',
  'Every event closes with certificates, a published recording or notes, and a written report within a week.',
  'A syllabus document reviewed and signed off by faculty before the term begins.'
];
