import { StatusCodes } from 'http-status-codes'
import { BadRequest, NotFound, Unauthenticated } from '../errors/index.js'
import User from '../models/User.js'
import { attachCookiesToResponse, createUserToken } from '../utils/index.js'

const register = async (req, res) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    throw new BadRequest('Please provide email, password and name')
  }

  const user = await User.create(req.body)

  const { _id } = user

  const userToken = createUserToken(user)
  attachCookiesToResponse(res, userToken)

  res
    .status(StatusCodes.CREATED)
    .json({ user: { email, name, _id }, token: userToken })
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

  const userToken = createUserToken(user)
  attachCookiesToResponse(res, userToken)

  const { _id, name } = user

  res
    .status(StatusCodes.OK)
    .json({ user: { email, name, _id }, token: userToken })
}

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })

  res.status(StatusCodes.OK).send('Logout')
}

const getCurrentUser = async (req, res) => {
  const { userId } = req.user

  const user = await User.findOne({ _id: userId })

  res.status(StatusCodes.OK).json({ user })
}

export { register, login, logout, getCurrentUser }
