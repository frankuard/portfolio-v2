import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    emailSent: { type: Boolean, default: false },
    emailError: { type: String, default: '' },
  },
  { timestamps: true }
)

export default mongoose.model('Message', messageSchema)