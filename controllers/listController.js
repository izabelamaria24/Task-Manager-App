import { StatusCodes } from 'http-status-codes'
import List from '../models/list/List.js'
import ListItem from '../models/list/ListItem.js'
import { BadRequest, NotFound } from '../errors/index.js'

const getAllLists = async (req, res) => {
  const lists = await List.find({ user: req.user.userId })

  res.status(StatusCodes.OK).json({ lists })
}

const getSingleList = async (req, res) => {
  const { id } = req.params

  const list = await List.findOne({ _id: id, user: req.user.userId })

  if (!list) {
    throw new NotFound(`No list found with id ${id}`)
  }

  const listItems = await ListItem.find({ list: list._id })

  res.status(StatusCodes.OK).json({ list, listItems })
}

const createList = async (req, res) => {
  const { listName } = req.body

  const list = await List.create({ user: req.user.userId, listName })

  res.status(StatusCodes.CREATED).json({ list })
}

const editList = async (req, res) => {
  const { listName } = req.body
  const { id } = req.params

  const list = await List.findOne({ user: req.user.userId, _id: id })

  if (!list) {
    throw new NotFound(`No list found with id ${id}`)
  }

  list.listName = listName
  list.save()

  res.status(StatusCodes.CREATED).json({})
}

const deleteList = async (req, res) => {
  const { id } = req.params

  const list = await List.findOne({ _id: id })

  if (!list) {
    throw new NotFound(`No list found with id ${id}`)
  }

  await ListItem.deleteMany({ list: list._id })
  await List.deleteOne({ _id: list._id })

  res.status(StatusCodes.OK).json({ msg: 'list removed' })
}

const createListItem = async (req, res) => {
  const { description } = req.body
  const { id } = req.params

  if (!description) {
    throw new BadRequest('Please provide list item description')
  }

  const list = await List.findOne({ user: req.user.userId, _id: id })

  if (!list) {
    throw new NotFound(`No list found with id ${id}`)
  }

  const listItem = await ListItem.create({ description, list: id })

  res.status(StatusCodes.CREATED).json({ listItem })
}

const deleteListItem = async (req, res) => {
  const { id: listId, itemId } = req.params

  const listItem = await ListItem.findOne({ list: listId, _id: itemId })

  if (!listItem) {
    throw new NotFound(`No listItem with id ${itemId} was found`)
  }

  await ListItem.deleteOne({ list: listId, _id: itemId })

  res.status(StatusCodes.OK).json({ msg: 'list item deleted' })
}

const editListItem = async (req, res) => {
  const { description } = req.body
  const { id: listId, itemId } = req.params

  const listItem = await ListItem.findOne({ list: listId, _id: itemId })

  if (!listItem) {
    throw new NotFound(`No listItem with id ${itemId} was found`)
  }

  listItem.description = description

  listItem.save()

  res.status(StatusCodes.CREATED).json({ listItem })
}

export {
  getAllLists,
  getSingleList,
  createList,
  editList,
  deleteList,
  createListItem,
  deleteListItem,
  editListItem,
}
