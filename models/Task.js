import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide task title'],
      maxlength: 100,
    },
    category: {
      type: String,
      required: [true, 'Please provide category'],
      enum: ['work', 'study', 'finance', 'personal'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Task', TaskSchema)
