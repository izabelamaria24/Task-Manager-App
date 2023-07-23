import { useAppContext } from '../context/appContext'

import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext()

  if (userLoading) return <h1>Loading</h1>

  if (!user) return <Navigate to='/landing' />

  return children
}

export default ProtectedRoute
