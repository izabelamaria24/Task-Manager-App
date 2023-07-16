const createUserToken = (user) => {
  return {
    name: user.name,
    userId: user._id,
  }
}

export { createUserToken }
