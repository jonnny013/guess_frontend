import { useState } from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { postTheme } from '../services/apiServices'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const [theme, setTheme] = useState()
  const [error, setError] = useState(null)
  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  const handleTextChange = e => {
    setTheme(e.target.value)
  }

  const handleTokenText = e => {
    setToken(e.target.value)
  }

  const handleStartGame = async () => {
    try {
      setIsLoading(true)
      const result = await postTheme(theme)
      navigate(`/answers/${result.id}`)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(null)
    }
  }

  const handleJoinGame = () => {
    navigate(`/answers/${token}`)
  }

  return (
    <div className='column  aligned' style={{ height: '100vh' }}>
      <h2>Start by choosing a theme</h2>
      <p>options go here</p>
      <p>...Or create your own theme</p>
      <TextInput placeholder='Your theme' onChange={handleTextChange} />
      <Button text='Start a new game' onClick={handleStartGame} />

      <h2>Already have a token?</h2>

      <TextInput placeholder='Token' onChange={handleTokenText} />
      <Button text='Join game' onClick={handleJoinGame} disabled={isLoading} />
      {error && <h4>{JSON.stringify(error)}</h4>}
    </div>
  )
}

export default StartPage
