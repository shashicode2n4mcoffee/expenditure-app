const mongoose = require('mongoose') // Erase if already required

// Declare the Schema of the Mongo model
var expenditureSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

//Export the model
module.exports = mongoose.model('Expenditure', expenditureSchema)
