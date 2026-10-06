import { linkedinUrls } from './linkedin.js';

export const lvl1 = [
  { role: 'HEAD OF DEPARTMENT', name: 'Dr. Joanne Gomes' },
  { role: 'FACULTY COORDINATOR', name: 'Ms. Priyanka Patil' },
  { role: 'FACULTY CO-COORDINATOR', name: 'Mr. Amol Lachake' }
];

export const lvl2 = [
  { role: 'PRESIDENT', name: 'Anlea Maria Jose' },
  { role: 'VICE-PRESIDENT', name: 'Krishnakumar Mandal' },
  { role: 'GENERAL SECRETARY', name: 'Prashant Jha' },
  { role: 'TREASURER', name: 'Aditya Soni' }
];

export const faculty = {
  top: lvl1[0],
  children: lvl1.slice(1)
};

export const core = {
  top: lvl2[0],
  children: lvl2.slice(1)
};

export const domains = [
  {
    name: 'Technical',
    head: 'Jitesh Zope',
    joint: ['Angel Xavier', 'Moin Mulla'],
    execs: ['Rohan Satkar', 'Trishal Raut', 'Neev Darji', 'Caitlin Moraes', 'Yashaang Adhikari', 'Hitansh Jani']
  },
  {
    name: 'Public Relations',
    head: 'Kennan Mascarenhas',
    joint: ['Sanika Dongarkar'],
    execs: ['Dipika Mishra', 'Mohammed Hamzah', 'Aman Thatte', 'Krish Deval']
  },
  {
    name: 'Webmaster',
    head: 'Anish Desai',
    joint: ['Riddhi Patil'],
    execs: ['Joel Almeida', 'Roshan Mathew', 'Ansel Almeida']
  },
  {
    name: 'Marketing',
    head: 'Riddhi Manjrekar',
    joint: ['Aldrin Serrao'],
    execs: ['Ryan Salve', 'Chirag Chavan']
  },
  {
    name: 'Logistics',
    head: 'Joel',
    joint: ['Kenn'],
    execs: ['Jaden']
  },
  {
    name: 'Multimedia',
    head: 'Nihar Naringrekar',
    joint: ['Agastya Shetty'],
    execs: ['Riwan Pereira', 'Nakul Burkul', 'Husain Ratlamwala', 'Nilam Shinde', 'Deeksha Moolya']
  },
  {
    name: 'Graphics',
    head: 'Royan Dsouza',
    joint: ['Sharon Elango'],
    execs: ['Aamir Khan', 'Ahana Kanchan', 'Gayatri Pillay']
  },
  {
    name: 'Creatives',
    head: 'Mariam Badure',
    joint: ['Tanvi Patil', 'Vera Pereira'],
    execs: ['Komal Mulik', 'Carol Chetty', 'Bethany Misquitta', 'Prajwal Kola', 'Bhoni Dodmani']
  }
];

export const domainLevels = domains.map((dm, i) => ({
  idx: i + 2,
  tag: 'LEVEL ' + (i + 3 < 10 ? '0' : '') + (i + 3) + ' · DOMAIN',
  name: dm.name,
  head: dm.head,
  joint: dm.joint.map(n => ({ name: n })),
  hasJoint: dm.joint.length > 0,
  execs: dm.execs.map(n => ({ name: n })),
  note: dm.joint.length ? '' : 'Joint head to be announced'
}));

export const treeLevels = [
  { label: 'HOD & COORDINATORS' },
  { label: 'CORE' },
  ...domains.map(d => ({ label: d.name.toUpperCase() }))
];

export function getRoleBio(role, domain) {
  const r = (role || '').toUpperCase();
  const d = (domain || '').toUpperCase();

  if (r.includes('HEAD OF DEPARTMENT')) {
    return 'Guides department-wide academic orientation, provides visionary mentorship to ADG initiatives, and fosters industry-aligned AI/ML research at SFIT.';
  }
  if (r.includes('COORDINATOR')) {
    return 'Bridges institutional curriculum with hands-on committee projects, reviewing event syllabi, workshop roadmaps, and student credentials.';
  }
  if (r.includes('VICE-PRESIDENT')) {
    return 'Oversees operational workflows, internal committee coordination, timeline adherence, and student community initiatives.';
  }
  if (r.includes('PRESIDENT')) {
    return 'Leads ADG overall vision, strategic partnerships, flagship hackathon execution, and cross-domain synergy across the academic term.';
  }
  if (r.includes('GENERAL SECRETARY')) {
    return 'Maintains official committee documentation, post-event reports, departmental approvals, and event calendar synchronization.';
  }
  if (r.includes('TREASURER')) {
    return 'Directs financial allocations, sponsorship bookkeeping, event logistics budgets, and annual audit documentation.';
  }
  if (d.includes('TECHNICAL')) {
    return 'Architects and conducts deep-learning bootcamps, maintains open-source repositories, and guides members through production ML workflows.';
  }
  if (d.includes('WEBMASTER')) {
    return 'Builds and deploys official committee platforms, ensures device responsiveness, fast load speeds, and web application reliability.';
  }
  if (d.includes('PUBLIC RELATIONS') || d.includes('PR')) {
    return 'Facilitates relations with guest industry specialists, manages student outreach across years, and represents ADG in inter-college dialogues.';
  }
  if (d.includes('MARKETING')) {
    return 'Drives campaign rollouts, event signups, attendee registrations, and digital engagement strategies for student cohorts.';
  }
  if (d.includes('LOGISTICS')) {
    return 'Coordinates computer labs, audio-visual technical setups, participant seating, and time-critical hardware operations.';
  }
  if (d.includes('MULTIMEDIA')) {
    return 'Captures event photo records, video interviews, workshop recap reels, and visual branding assets.';
  }
  if (d.includes('GRAPHICS')) {
    return 'Crafts visual identities, typographic posters, event banner visuals, and certificates of completion.';
  }
  if (d.includes('CREATIVE')) {
    return 'Designs thematic campus experiences, interactive event activities, promotional copy, and experiential engagements.';
  }
  return 'Active member contributing to committee execution, workshop mentorship, and project development for AY 2026–27.';
}

export function getMemberData(name, role, domain) {
  const cleanName = (name || '').trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  let initials = 'ADG';
  if (words.length >= 2) {
    initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();
  } else if (words.length === 1) {
    initials = words[0].slice(0, 2).toUpperCase();
  }

  const direct = (linkedinUrls[cleanName] || '').trim();
  const query = encodeURIComponent(cleanName + ' SFIT');
  const ghQuery = encodeURIComponent(cleanName.replace(/\s+/g, ''));
  const igQuery = encodeURIComponent(cleanName.toLowerCase().replace(/\s+/g, '_'));

  return {
    name: cleanName,
    role: role || 'Committee Member',
    domain: domain || 'ADG SFIT',
    initials: initials,
    linkedin: direct || 'https://www.linkedin.com/search/results/all/?keywords=' + query,
    hasLinkedin: !!direct,
    github: 'https://github.com/search?q=' + ghQuery,
    instagram: 'https://www.instagram.com/' + igQuery,
    email: 'mailto:adg@sfit.ac.in?subject=Connecting%20with%20' + encodeURIComponent(cleanName),
    bio: getRoleBio(role, domain)
  };
}
