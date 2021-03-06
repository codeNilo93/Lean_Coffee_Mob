const express = require('express')
const connectDatabase = require('./setupMongo')
const errorHandler = require('./errorHandler')
require ('dotenv').config()

const app = express()

const {PORT, MONGODB_URI} = process.env

connectDatabase(MONGODB_URI)

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

// Wenn ein Fehler auftritt, geht der Request durch diese
// Middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
