import mongoose from 'mongoose'

const FriendRequestSchema = new mongoose.Schema(
  {
    accepted: {
      type: Boolean,
      default: false,
    },
    userFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('FriendRequest', FriendRequestSchema)
