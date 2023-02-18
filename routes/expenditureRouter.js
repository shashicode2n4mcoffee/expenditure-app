const express = require('express')
const {
  fetchExpenditure,
  addExpenditure,
  updateExpenditure,
  deleteExpenditure,
  fetchExpenditureByMonthYear,
  fetchExpenditureByYear,
} = require('../controller/expenditureCtrl')

const router = express.Router()

router.get('/expenditure/year', fetchExpenditureByYear)
router.get('/expenditure/month', fetchExpenditureByMonthYear)
router.get('/expenditure', fetchExpenditure)
router.post('/expenditure/', addExpenditure)
router.patch('/expenditure/:id', updateExpenditure)
router.delete('/expenditure/:id', deleteExpenditure)

module.exports = router
