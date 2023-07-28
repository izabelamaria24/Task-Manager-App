import express from 'express'
const router = express.Router()

import {
  createTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
} from '../controllers/taskController.js'

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).delete(deleteTask).patch(updateTask)

export default router
