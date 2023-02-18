require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

// LOCAL IMPORTS
const expenditureRouter = require('./routes/expenditureRouter')
const categoryRouter = require('./routes/categoryRoutes')
const dbConnect = require('./config/db')

// DECLARATIONS
const PORT = process.env.PORT || 8081
const app = express()

// DB CONNECTION
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1', expenditureRouter)
app.use('/api/v1', categoryRouter)

app.get('/api/v1', (req, res) => {
  res.status(200).send('Hello world')
})

//SERVER LAUNCH
app.listen(PORT, () => {
  console.log(`Server is listening on the PORT : ${PORT}`)
})
