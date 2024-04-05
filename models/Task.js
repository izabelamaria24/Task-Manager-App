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
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    time: {
      hour: {
        type: String,
        maxlength: 5,
      },
      date: {
        selectedDay: {
          type: Number,
        },
        selectedMonth: {
          type: Number,
        },
        selectedYear: {
          type: Number,
        },
      },
    },
    score: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
)

export default mongoose.model('Task', TaskSchema)
