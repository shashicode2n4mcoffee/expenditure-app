const handleAsync = require('async-error-handler')
const moment = require('moment')
const Expenditure = require('../models/expenditure')

const fetchExpenditure = handleAsync(
  async (req, res) => {
    const list = await Expenditure.find()
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
    })
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
    })
    res.status(200).send(list)
  },
  (error) => {
    throw new Error(error)
  }
)

const addExpenditure = handleAsync(
  async (req, res) => {
    const expenditure = await Expenditure.create({
      ...req.body,
      date: new Date(req.body?.date),
    })
    res.status(200).send(expenditure)
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

const addCategory = handleAsync(
  async (req, res) => {
    
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
