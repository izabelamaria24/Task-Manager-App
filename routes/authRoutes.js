import express from 'express'
const router = express.Router()

import {
  register,
  login,
  logout,
  getCurrentUser,
  getAllUsers,
} from '../controllers/authController.js'

import { authenticateUser } from '../middleware/authentication.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser)
router.route('/getUsers').get(authenticateUser, getAllUsers)

export default router
