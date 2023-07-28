import mongoose from 'mongoose'
import ListItem from './ListItem.js'

const ListSchema = new mongoose.Schema(
  {
    listName: {
      type: String,
      maxLength: 500,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('List', ListSchema)
