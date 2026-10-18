import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema(
  {
    years: { type: String, required: true },
    company: { type: String, required: true },
    role: { type: String, required: true },
    copy: { type: String, required: true },
    logo: { type: String, default: '' },
    logoAlt: { type: String, default: '' },
    initials: { type: String, default: '' },
    order: { type: Number, default: 0 }, // lowest number is shown first
  },
  { timestamps: true },
)

export default mongoose.model('Experience', experienceSchema)