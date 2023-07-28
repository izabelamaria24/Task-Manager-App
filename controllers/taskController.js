import Task from '../models/Task.js'
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
  const { title, category } = req.body

  const task = await Task.findOne({ user: req.user.userId, _id: id })

  if (!task) {
    throw new NotFound(`No task with id ${id}`)
  }

  if (!title || !category) {
    throw new BadRequest('Please provide task title and category')
  }

  task.category = category
  task.title = title
  task.save()

  res.status(StatusCodes.CREATED).json({ task })
}

const createTask = async (req, res) => {
  const { category, title } = req.body

  if (!category || !title) {
    throw new BadRequest('Please provide task title and category')
  }

  const task = await Task.create({ user: req.user.userId, category, title })

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
