// imports
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'

// set express server
const app = express()

// dotenv
dotenv.config()

const start = async () => {
  // start the server
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
