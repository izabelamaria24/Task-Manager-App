import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import Task from './Task.js'
import FriendRequest from './FriendRequest.js'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 40,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePasswords = async function (inputPassword) {
  const passwordMatch = await bcrypt.compare(inputPassword, this.password)
  return passwordMatch
}

UserSchema.methods.calculateTotalScore = async function () {
  const userId = this._id

  const totalScore = await Task.aggregate([
    {
      $match: { user: userId },
    },
    {
      $group: {
        _id: null,
        totalScore: { $sum: '$score' },
      },
    },
  ])

  return totalScore.length > 0 ? totalScore[0].totalScore : 0
}

export default mongoose.model('User', UserSchema)
