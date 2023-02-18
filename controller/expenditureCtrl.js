const handleAsync = require('async-error-handler')
const moment = require('moment')
const Expenditure = require('../models/expenditure')
const Category = require('../models/category')

const fetchExpenditure = handleAsync(
  async (req, res) => {
    const list = await Expenditure.find().populate('category')
    res.status(200).send(list)
  },
  (error) => {
    throw new Error(error)
  }
)

const fetchExpenditureByMonthYear = handleAsync(
  async (req, res) => {
    const list = await Expenditure.find({
      date: {
        $gte: new Date(req.query?.from),
        $lte: new Date(req.query?.to),
      },
    }).populate('category')
    res.status(200).send(list)
  },
  (error) => {
    throw new Error(error)
  }
)

const fetchExpenditureByYear = handleAsync(
  async (req, res) => {
    const list = await Expenditure.find({
      date: {
        $gte: new Date(req.query?.from),
        $lte: new Date(req.body?.$lte),
      },
    }).populate('category')
    res.status(200).send(list)
  },
  (error) => {
    throw new Error(error)
  }
)

const addExpenditure = handleAsync(
  async (req, res) => {
    const category = await Category.findOne({ title: req.body?.category })
    if (!category) {
      randomCategory = await Category.findOne({ title: 'Random' })
      const expenditure = await Expenditure.create({
        ...req.body,
        date: new Date(req.body?.date),
        category: randomCategory._id,
      })
      res.status(200).send(expenditure)
    } else {
      category = await Category.findOne({ title: req.body?.category })
      const expenditure = await Expenditure.create({
        ...req.body,
        date: new Date(req.body?.date),
        category: category._id,
      })
      res.status(200).send(expenditure)
    }
  },
  (error) => {
    throw new Error(error)
  }
)

const updateExpenditure = handleAsync(
  async (req, res) => {
    const id = req.params.id
    const updatedExpediture = await Expenditure.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    )

    res.status(200).send(updatedExpediture)
  },
  (error) => {
    throw new Error(error)
  }
)

const deleteExpenditure = handleAsync(
  async (req, res) => {
    const deletedExpenditure = await Expenditure.deleteOne({
      _id: req.params.id,
    })
    res.status(200).send(deletedExpenditure)
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = {
  fetchExpenditure,
  addExpenditure,
  updateExpenditure,
  deleteExpenditure,
  fetchExpenditureByMonthYear,
  fetchExpenditureByYear,
}
