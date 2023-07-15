import { StatusCodes } from 'http-status-codes'

class NotFound extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

export default NotFound
