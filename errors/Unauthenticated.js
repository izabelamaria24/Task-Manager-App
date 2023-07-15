import { StatusCodes } from 'http-status-codes'

class Unauthenticated extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default Unauthenticated
