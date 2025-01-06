import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartPage from './components/StartPage'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </>
  )
}

export default App
