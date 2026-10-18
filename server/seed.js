import 'dotenv/config'
import mongoose from 'mongoose'
import Experience from './src/models/Experience.js'
import Recognition from './src/models/Recognition.js'
import Education from './src/models/Education.js'
import Project from './src/models/Project.js'

// ===== EDIT YOUR DATA HERE, then run: npm run seed =====

const experience = [
  {
    order: 1,
    years: 'Feb 2026-PRESENT',
    company: 'AI Horizon',
    role: 'Founder & Research Head',
    copy: 'Supervising and guiding individual and group projects from planning to execution, conducting research in AI, ML, and emerging technologies, and mentoring team members to enhance technical skills, problem-solving, and collaboration.',
    logo: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/bicaihorizon.jpg', 
    logoAlt: 'AI Horizon logo',
    initials: 'AH',
  },
]

// PLACEHOLDER: replace with your real projects.
// image: paste an ImageKit URL, for example 'https://ik.imagekit.io/your_id/project1.png?tr=w-900'
// Leave image, liveUrl or githubUrl as '' to hide them.
const projects = [
  {
    order: 1,
    title: 'Chautari',
    description: 'A full-stack campus platform featuring role-based dashboards, real-time messaging, campus operations, and a RAG-powered AI assistant.',
    image: '',
    tags:  [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'Groq',
      'RAG',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/frankuard/MERN-SEP-PROJECT',
  },
  {
    order: 2,
    title: 'AI Video Assistant',
    description: 'An AI-powered video assistant that transcribes videos using Whisper, generates summaries and action items, and enables semantic search and RAG-based question answering using ChromaDB.',
    image: '',
    tags: [
      'Python',
      'Whisper',
      'LangChain',
      'ChromaDB',
      'Groq',
      'RAG',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/frankuard/video-assistant-with-rag',
  },
   {
    order: 3,
    title: 'AI Research Assistant',
    description:
      'A multi-stage AI research system that searches the web, extracts webpage content, generates research reports, and evaluates results through a critic chain, with a React and Tailwind frontend.',
    image: '',
    tags: [
      'Python',
      'LangChain',
      'Groq',
      'React',
      'Tailwind CSS',
      'Tavily',
      'FastAPI',
    ],
    liveUrl: '',
    githubUrl:
      'https://github.com/frankuard/multi-agent-ai-research-system-using-langchain',
  },
  {
    order: 4,
    title: 'Bank Management System Backend',
    description:
      'A banking REST API featuring JWT authentication, bcrypt password hashing, token blacklisting, account management, transactions, ledger records, idempotency, and email notifications.',
    image: '',
    tags: [
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'REST API',
      'Bcrypt',
    ],
    liveUrl: '',
    githubUrl:
      'https://github.com/frankuard/Bank-Management-System-Backend',
  },
]

// PLACEHOLDER: replace with your real education.
const education = [
  {
    order: 1,
    years: 'Nov 2025 — Present',
    degree: "BSc (Hons) Computer Science",
    institution: 'Biratnagar International College',
    description:  'An undergraduate Computer Science degree affiliated with the University of Wolverhampton.',
  },
]

// These three are placeholders from the design file. Replace them with your real ones.
const recognitions = [
  { order: 1, 
    date: 'Sept 2026', 
    title: 'Best SEP WEB/IT Project', 
    description: 'Recognized for the Chautari campus platform project.',
    image: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/bestsep.jpg' },
  { 
    order: 2, 
    date: 'Sept 2026', 
    title: 'Community of the Year', 
    description: 'Recognized for building and leading the AI Horizon community.',
    image: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/communityoftheyear.jpg' },

]

// =======================================================

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    await Experience.deleteMany({})
    await Recognition.deleteMany({})
    await Education.insertMany(education)
    await Project.insertMany(projects)

    await Experience.insertMany(experience)
    await Recognition.insertMany(recognitions)

    console.log(
      `Seeded ${experience.length} experience, ${projects.length} projects, ${education.length} education and ${recognitions.length} recognitions`,
    )
  } catch (error) {
    console.error('Seeding failed:', error.message)
    process.exitCode = 1
  } finally {
    await mongoose.disconnect()
  }
}

seed()