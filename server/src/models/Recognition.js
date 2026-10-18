import mongoose from 'mongoose'

const recognitionSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' }, // ImageKit URL
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export default mongoose.model('Recognition', recognitionSchema)