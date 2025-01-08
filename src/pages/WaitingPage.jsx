import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import { getNumberOfAnswers } from '../services/apiServices'
import { useTranslation } from 'react-i18next'

const WaitingPage = () => {
  const [finishedPlayers, setFinishedPlayers] = useState(1)
  const [searchParams] = useSearchParams()
  const [error, setError] = useState(null)
  const id = useParams().id
  const navigate = useNavigate()
  const {t} = useTranslation()

  const handleClick = () => {
    const name = searchParams.get('name')
    const theme = searchParams.get('theme')
    navigate(`/guessing/${id}/?name=${name}&theme=${theme}`)
  }

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        setError(null)
        const result = await getNumberOfAnswers(id)
        setFinishedPlayers(result)
      } catch (err) {
        console.error(err)
        setError('An error occurred')
      }
    }, 3000)
    return () => clearInterval(intervalId)
  }, [id])

  return (
    <div className='column centered aligned oneHundred' style={{ padding: 10 }}>
      <h1 className='alignedText'>{t('waiting.title')}</h1>
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
      <h3 className='alignedText'>{t('waiting.desc')}</h3>
      <Button text={t('waiting.btn')} onClick={handleClick} />
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  )
}

export default WaitingPage
