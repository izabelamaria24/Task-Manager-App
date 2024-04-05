import Task from '../models/Task.js'
import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequest, NotFound } from '../errors/index.js'

const getAllTasks = async (req, res) => {
  const { userId } = req.user
  const tasks = await Task.find({ user: userId })

  res.status(StatusCodes.OK).json({ tasks })
}

const getSingleTask = async (req, res) => {
  const { id } = req.params

  const task = await Task.findOne({ user: req.user.userId, _id: id })

  if (!task) {
    throw new NotFound(`No task with id ${id}`)
  }

  res.status(StatusCodes.OK).json({ task })
}

const updateTask = async (req, res) => {
  const { id } = req.params
  const { score, title, category, time, completed } = req.body

  const task = await Task.findOne({ user: req.user.userId, _id: id })

  if (!task) {
    throw new NotFound(`No task with id ${id}`)
  }

  if (!title || !category) {
    throw new BadRequest('Please provide task title and category')
  }

  task.score = score
  task.category = category
  task.title = title
  task.time = time
  task.completed = completed

  task.save()

  const user = await User.findOne({ _id: req.user.userId })

  const totalScore = await user.calculateTotalScore()

  console.log(totalScore)

  res.status(StatusCodes.CREATED).json({ task, totalScore })
}

const createTask = async (req, res) => {
  const { category, title, time, completed } = req.body
  console.log(time)

  if (!category || !title || !time) {
    throw new BadRequest('Please provide task title and category')
  }

  const task = await Task.create({
    user: req.user.userId,
    category,
    title,
    time,
    completed,
  })

  res.status(StatusCodes.CREATED).json({ task })
}

const deleteTask = async (req, res) => {
  const { id } = req.params

  const task = await Task.findOneAndDelete({ _id: id })

  if (!task) {
    throw new NotFound(`No task with id ${id}`)
  }

  res.status(StatusCodes.OK).json({ msg: 'task deleted' })
}

export { getAllTasks, getSingleTask, createTask, deleteTask, updateTask }
