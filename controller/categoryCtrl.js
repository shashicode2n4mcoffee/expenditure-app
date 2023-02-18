const handleAsync = require('async-error-handler')
const Category = require('../models/category')

const addCategory = handleAsync(
  async (req, res) => {
    const category = await Category.create(req.body)
    res.status(200).send(category)
  },
  (error) => {
    throw new Error(error)
  }
)

const getCategory = handleAsync(
  async (req, res) => {
    const categoryList = await Category.find()
    res.status(200).send(categoryList)
  },
  (error) => {
    throw new Error(error)
  }
)

const updateCategory = handleAsync(
  async (req, res) => {
    const id = req.params.id
    const updatedcategory = await Category.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    )
    res.status(200).send(updatedcategory)
  },
  (error) => {
    throw new Error(error)
  }
)

const deleteCategory = handleAsync(
  async (req, res) => {
    const id = req.params.id
    const deletedCategory = await Category.findByIdAndDelete(id)
    res.status(200).send(deletedCategory)
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = {
  getCategory,
  updateCategory,
  addCategory,
  deleteCategory,
}
