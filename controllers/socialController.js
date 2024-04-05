import { StatusCodes } from 'http-status-codes'
import { BadRequest } from '../errors/index.js'
import FriendRequest from '../models/FriendRequest.js'

const sendFriendRequest = async (req, res) => {
  const { id: userTo } = req.params // id ul userului caruia ii trimitem friend req
  const { userId: userFrom } = req.user

  console.log(userFrom, userTo)

  if (!userTo || !userFrom) throw new BadRequest('No users found')

  const alreadyExistingFriendRequest = await FriendRequest.findOne({
    userFrom,
    userTo,
  })

  if (alreadyExistingFriendRequest) {
    throw new BadRequest('Friend request already sent')
  }

  const friendRequest = await FriendRequest.create({ userTo, userFrom })

  res.status(StatusCodes.CREATED).json({ friendRequest })
}

const acceptFriendRequest = async (req, res) => {}

export { sendFriendRequest, acceptFriendRequest }
