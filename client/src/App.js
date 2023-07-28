import { Landing, Error, Register, ProtectedRoute } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/appContext'
import {
  SharedLayout,
  Stats,
  CurrentTasks,
  Profile,
  AddTask,
  Lists,
} from './pages/dashboard'

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<CurrentTasks />}></Route>
            <Route path='/stats' element={<Stats />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/add-task' element={<AddTask />}></Route>
            <Route path='/lists' element={<Lists />}></Route>
          </Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
export default App
