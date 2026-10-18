import mongoose from 'mongoose'

const educationSchema = new mongoose.Schema(
  {
    years: { type: String, required: true }, // e.g. '2020 — 2024'
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    description: { type: String, default: '' },
    order: { type: Number, default: 0 }, // lowest number is shown first
  },
  { timestamps: true },
)

export default mongoose.model('Education', educationSchema)