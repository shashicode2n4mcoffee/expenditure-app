const mongoose = require('mongoose') 

// Declare the Schema of the Mongo model
var categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      default: 'red',
    },
  },
  {
    timestamps: true,
  }
)

//Export the model
module.exports = mongoose.model('Category', categorySchema)
