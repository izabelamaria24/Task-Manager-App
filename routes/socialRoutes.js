import express from 'express'
const router = express.Router()

import {
  sendFriendRequest,
  acceptFriendRequest,
} from '../controllers/socialController.js'

router.route('/:id').post(sendFriendRequest).patch(acceptFriendRequest)

export default router
