import { Router } from 'express'
import Experience from '../models/Experience.js'
import Recognition from '../models/Recognition.js'
import Education from '../models/Education.js'
import Project from '../models/Project.js'
import rateLimit from 'express-rate-limit'
import { sendContactMail } from '../utils/mail.js'
import Message from '../models/Message.js'


const router = Router()

router.get('/experience', async (req, res) => {
  try {
    res.json(await Experience.find().sort({ order: 1 }))
  } catch (error) {
    res.status(500).json({ message: 'Could not load experience' })
  }
})

router.get('/recognitions', async (req, res) => {
  try {
    res.json(await Recognition.find().sort({ order: 1 }))
  } catch (error) {
    res.status(500).json({ message: 'Could not load recognitions' })
  }
})

router.get('/education', async (req, res) => {
  try {
    res.json(await Education.find().sort({ order: 1 }))
  } catch (error) {
    res.status(500).json({ message: 'Could not load education' })
  }
})

router.get('/projects', async (req, res) => {
  try {
    res.json(await Project.find().sort({ order: 1 }))
  } catch (error) {
    res.status(500).json({ message: 'Could not load projects' })
  }
})


const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: { message: 'Too many messages. Please try again later.' },
})

router.post('/contact', contactLimiter, async (req, res) => {
  const { name = '', email = '', subject = '', message = '', website = '' } = req.body || {}

  // hidden field that only bots fill in: pretend it worked, store nothing
  if (website) return res.json({ ok: true })

  const line = (text, max) => String(text).replace(/[\r\n]+/g, ' ').trim().slice(0, max)
  const data = {
    name: line(name, 100),
    email: line(email, 200),
    subject: line(subject, 150),
    message: String(message).trim().slice(0, 5000),
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  if (!data.name || !data.subject || !data.message || !validEmail) {
    return res.status(400).json({ message: 'Please fill in every field with a valid email.' })
  }

  // 1. save first, so the message is never lost
  let saved
  try {
    saved = await Message.create(data)
  } catch (error) {
    console.error('Contact save failed:', error.message)
    return res.status(500).json({ message: 'Could not send your message. Please try again later.' })
  }

  // 2. notify you by email; a failure here does not lose the message
  try {
    await sendContactMail(data)
    saved.emailSent = true
  } catch (error) {
    console.error('Contact mail failed:', error.message)
    saved.emailError = String(error.message).slice(0, 300)
  }

  try {
    await saved.save()
  } catch (error) {
    console.error('Contact status update failed:', error.message)
  }

  res.json({ ok: true })
})

export default router