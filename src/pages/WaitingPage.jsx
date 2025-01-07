import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { getNumberOfAnswers } from '../services/apiServices'

const WaitingPage = () => {
  const [finishedPlayers, setFinishedPlayers] = useState(1)
  const [error, setError] = useState(null)
  const id = useParams().id
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/guessing/${id}`)
  }

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        setError(null)
        const result = await getNumberOfAnswers(id)
        console.log(result)
        setFinishedPlayers(result)
      } catch (err) {
        console.error(err)
        setError('An error occurred')
      }
    }, 3000)
    return () => clearInterval(intervalId)
  }, [id])

  return (
    <div className='column centered aligned oneHundred'>
      <h1>Number of players finished</h1>
      <div
        style={{
          borderRadius: '50%',
          height: 100,
          width: 100,
          backgroundColor: 'orange',
        }}
        className='row centered aligned'
      >
        <h1>{finishedPlayers}</h1>
      </div>
      <h3>Wait for everyone to finish and then go to the next page!</h3>
      <Button text='Next page' onClick={handleClick} />
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  )
}

export default WaitingPage
