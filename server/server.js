import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import connectDB from './src/config/db.js'
import portfolioRoutes from './src/routes/portfolio.js'

const app = express()
app.set('trust proxy', 1)

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// make sure the database is connected before any route runs
app.use(async (req, res, next) => {
  try {
    await connectDB()
    next()
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    res.status(500).json({ message: 'Service temporarily unavailable.' })
  }
})

app.use('/api', portfolioRoutes)

// last-resort error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Something went wrong.' })
})

// Local development only: Vercel runs the exported app itself
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000
  connectDB()
    .then(() => {
      console.log('MongoDB connected')
      app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message)
      process.exit(1)
    })
}

export default app