import { StatusCodes } from 'http-status-codes'

class BadRequest extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequest
