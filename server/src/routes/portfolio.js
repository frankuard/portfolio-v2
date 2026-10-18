import { Router } from 'express'
import Experience from '../models/Experience.js'
import Recognition from '../models/Recognition.js'
import Education from '../models/Education.js'

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

export default router