const express = require('express')
const {
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../controller/categoryCtrl')

const router = express.Router()

router.post('/category', addCategory)
router.get('/category', getCategory)
router.patch('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)

module.exports = router
