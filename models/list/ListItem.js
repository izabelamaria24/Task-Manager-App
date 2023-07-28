import mongoose from 'mongoose'

const ListItemSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      maxLength: 500,
    },
    list: {
      type: mongoose.Schema.ObjectId,
      ref: 'List',
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('ListItem', ListItemSchema)
