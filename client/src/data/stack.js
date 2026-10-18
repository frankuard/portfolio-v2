// mark = the initials shown in the tool box.
// To use a real logo instead: put it in public/icons/ and set icon: '/icons/react.svg'
export const stackGroups = [
  {
    id: '01',
    name: 'Frontend stack',
    copy: 'Interfaces, client-side logic, and responsive product experiences.',
    nodes: [
      { name: 'React', mark: 'Re', icon: '' },
      { name: 'Next.js', mark: 'N', icon: '' },
      { name: 'TypeScript', mark: 'TS', icon: '' },
      { name: 'Tailwind', mark: 'Tw', icon: '' },
    ],
  },
  {
    id: '02',
    name: 'Backend stack',
    copy: 'APIs, business logic, authentication, and server-side services.',
    nodes: [
      { name: 'Node.js', mark: 'JS', icon: '' },
      { name: 'Express', mark: 'Ex', icon: '' },
      { name: 'REST API', mark: 'API', icon: '' },
      { name: 'Python', mark: 'Py', icon: '' },
    ],
  },
  {
    id: '03',
    name: 'Database stack',
    copy: 'Structured data, caching, schemas, and reliable persistence.',
    nodes: [
      { name: 'PostgreSQL', mark: 'Pg', icon: '' },
      { name: 'MongoDB', mark: 'Mo', icon: '' },
      { name: 'Redis', mark: 'Rd', icon: '' },
      { name: 'Prisma', mark: 'Pr', icon: '' },
    ],
  },
]