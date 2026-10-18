import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './src/config/db.js'
import portfolioRoutes from './src/routes/portfolio.js'

const app = express()
app.set('trust proxy', 1)

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api', portfolioRoutes)

const PORT = process.env.PORT || 3000

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
})