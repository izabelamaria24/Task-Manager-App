import { Landing, Error, Register, ProtectedRoute } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/appContext'

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <h1>Home page</h1>
              </ProtectedRoute>
            }
          ></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
export default App
