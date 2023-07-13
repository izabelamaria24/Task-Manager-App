import { Landing, Error, Register } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
