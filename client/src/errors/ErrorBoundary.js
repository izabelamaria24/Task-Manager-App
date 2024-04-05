import React, { useState } from 'react'

const MyErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  const handleError = (error, errorInfo) => {
    console.error('Error caught by error boundary:', error, errorInfo)
    setHasError(true)
  }

  try {
    return children
  } catch (error) {
    handleError(error, null)
  }

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>
  }

  return children
}

export default MyErrorBoundary
