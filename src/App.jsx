import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartPage from './components/StartPage'

function App() {


  return (
  <Routes>
    <Route path='/' element={<StartPage />} />
  </Routes>
  )
}

export default App
