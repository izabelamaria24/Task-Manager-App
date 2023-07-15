import { StatusCodes } from 'http-status-codes'
import { BadRequest, NotFound, Unauthenticated } from '../errors/index.js'
import User from '../models/User.js'

const register = async (req, res) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    throw new BadRequest('Please provide email, password and name')
  }

  const user = await User.create(req.body)

  const { _id } = user
  res.status(StatusCodes.CREATED).json({ user: { email, name, _id } })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequest('Please provide email and password')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new NotFound('User not found')
  }

  const matchPasswords = await user.comparePasswords(password)

  if (!matchPasswords) {
    throw new Unauthenticated('Invalid credentials')
  }

  const { _id } = user
  res.status(StatusCodes.OK).json({ user: { email, _id } })
}

export { register, login }
