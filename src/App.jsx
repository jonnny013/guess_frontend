import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Header from './components/Header'
import AnswerPage from './pages/AnswerPage'
import WaitingPage from './pages/WaitingPage'
import GuessingPage from './pages/GuessingPage'
import FinalPage from './pages/FinalPage'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/answers/:id' element={<AnswerPage />} />
        <Route path='/waiting/:id' element={<WaitingPage />} />
        <Route path='/guessing/:id' element={<GuessingPage />} />
        <Route path='/final/:id' element={<FinalPage />} />
      </Routes>
    </>
  )
}

export default App
