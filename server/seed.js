import 'dotenv/config'
import mongoose from 'mongoose'
import Experience from './src/models/Experience.js'
import Recognition from './src/models/Recognition.js'
import Education from './src/models/Education.js'

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

// PLACEHOLDER: replace with your real education.
const education = [
  {
    order: 1,
    years: 'Nov 2025 — Present',
    degree: "Bachelor's degree, Information Technology",
    institution: 'Biratnagar International College',
    description: 'This college is affiliated with the University of Wolverhampton',
  },
]

// These three are placeholders from the design file. Replace them with your real ones.
const recognitions = [
  { order: 1, date: 'Sept 2026', title: 'Best SEP WEB/IT Project', description: 'Won Best SEP WEB/IT award for our project Chautari',image: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/bestsep.jpg' },
  { order: 2, date: 'Sept 2026', title: 'Community of the Year', description: 'Won the Best Community of the Year for our Community AI Horizon',image: 'https://ik.imagekit.io/ltf9bjszh/Portfolio/communityoftheyear.jpg' },

]

// =======================================================

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    await Experience.deleteMany({})
    await Recognition.deleteMany({})
    await Education.deleteMany({})

    await Experience.insertMany(experience)
    await Recognition.insertMany(recognitions)
    await Education.insertMany(education)

    console.log(
      `Seeded ${experience.length} experience, ${education.length} education and ${recognitions.length} recognitions`,
    )
  } catch (error) {
    console.error('Seeding failed:', error.message)
    process.exitCode = 1
  } finally {
    await mongoose.disconnect()
  }
}

seed()