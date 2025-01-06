import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Header from './components/Header'
import AnswerPage from './pages/AnswerPage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/answers/:id' element={<AnswerPage />} />
      </Routes>
    </>
  )
}

export default App
