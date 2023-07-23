import { Unauthenticated } from '../errors/index.js'
import { isTokenValid } from '../utils/jwt.js'

const authenticateUser = (req, res, next) => {
  const { token } = req.signedCookies

  if (!token) {
    throw new Unauthenticated('Token invalid')
  }

  try {
    const { name, userId } = isTokenValid(token)
    req.user = { name, userId }
    next()
  } catch (error) {
    throw new Unauthenticated('Not authorized to access this route')
  }
}

export { authenticateUser }
