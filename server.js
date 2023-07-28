// imports
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'

import 'express-async-errors'
import notFound from './middleware/not-found.js'
import errorHandler from './middleware/errorHandler.js'

// routers
import authRouter from './routes/authRoutes.js'
import taskRouter from './routes/taskRoutes.js'
import listsRouter from './routes/listRoutes.js'

import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { authenticateUser } from './middleware/authentication.js'

// set express server
const app = express()

// dotenv
dotenv.config()

app.set('trust proxy', 1)

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(cookieParser(process.env.JWT_SECRET))

app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', authenticateUser, taskRouter)
app.use('/api/v1/lists', authenticateUser, listsRouter)

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
