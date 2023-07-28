import express from 'express'
const router = express.Router()

import {
  getAllLists,
  getSingleList,
  createList,
  editList,
  deleteList,
  createListItem,
  editListItem,
  deleteListItem,
} from '../controllers/listController.js'

router.route('/').get(getAllLists).post(createList)
router
  .route('/:id')
  .get(getSingleList)
  .patch(editList)
  .delete(deleteList)
  .post(createListItem)

router.route('/:id/:itemId').patch(editListItem).delete(deleteListItem)

export default router
