import dns from 'node:dns'
import mongoose from 'mongoose'

// Only needed on your own network (fixes MongoDB SRV lookups); skipped on Vercel
if (!process.env.VERCEL) {
  dns.setServers(['8.8.8.8', '1.1.1.1'])
}

// Reuse one connection across requests (serverless functions start cold often)
const cached = global._mongoose || (global._mongoose = { conn: null, promise: null })

const connectDB = async () => {
  if (cached.conn) return cached.conn

  cached.promise ||= mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
  })

  try {
    cached.conn = await cached.promise
  } catch (error) {
    cached.promise = null // allow a retry on the next request
    throw error
  }

  return cached.conn
}

export default connectDB