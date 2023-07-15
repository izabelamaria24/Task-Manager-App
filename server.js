// imports
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'

import 'express-async-errors'
import notFound from './middleware/not-found.js'
import errorHandler from './middleware/errorHandler.js'

import authRouter from './routes/authRoutes.js'
import morgan from 'morgan'

// set express server
const app = express()

// dotenv
dotenv.config()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/auth', authRouter)

// error handling
app.use(notFound)
app.use(errorHandler)

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
