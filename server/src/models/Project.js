import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' }, // ImageKit URL
    tags: { type: [String], default: [] }, // e.g. ['React', 'Node.js']
    liveUrl: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    order: { type: Number, default: 0 }, // lowest number is shown first
  },
  { timestamps: true },
)

export default mongoose.model('Project', projectSchema)