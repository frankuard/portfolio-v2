const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

// MANUAL LOGOS: for techs with no automatic logo.
// 1. Upload the logo to ImageKit and copy its URL.
// 2. Add a line below. The name must be lowercase and match the tag in seed.js.
const customLogos = {
  'socket.io': 'https://ik.imagekit.io/ltf9bjszh/Portfolio/socketio.png?tr=w-64',
  fastapi: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/fastapi.png?tr=w-64',
  jwt: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/jwt.png?tr=w-64',
  chromadb: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/chromadb.webp?tr=w-64',
  tavily: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/tavily.png?tr=w-64',
}

const slugs = {
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  java: 'java',
  html: 'html5',
  css: 'css3',
  react: 'react',
  'next.js': 'nextjs',
  'node.js': 'nodejs',
  express: 'express',
  tailwind: 'tailwindcss',
  'tailwind css': 'tailwindcss',
  git: 'git',
  github: 'github',
  docker: 'docker',
  postman: 'postman',
  figma: 'figma',
  mongodb: 'mongodb',
  postgresql: 'postgresql',
  mysql: 'mysql',
  firebase: 'firebase',
}

export const getTechIcon = (name) => {
  const key = name.toLowerCase()
  if (customLogos[key]) return customLogos[key]
  const slug = slugs[key]
  return slug ? `${BASE}/${slug}/${slug}-original.svg` : null
}