import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTheme, postAnswer } from '../services/apiServices'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next'

const AnswerPage = () => {
  const { id } = useParams()
  const [theme, setTheme] = useState()
  const [error, setError] = useState(null)
  const [answer, setAnswer] = useState()
  const [name, setName] = useState()
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const getInfo = async () => {
      try {
        setIsLoading(true)
        const result = await getTheme(id)
        setTheme(result.theme)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(null)
      }
    }
    getInfo()
  }, [id])

  const handleAnswer = async () => {
    if (!name || !answer) {
      setError('Please write your name and answer!')
      return
    }
    setError(null)
    try {
      setIsLoading(true)
      await postAnswer({ answer, name, sessionId: parseInt(id) })
      navigate(`/waiting/${id}/?name=${name}&theme=${theme}`)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className='column aligned'>
      <h2 className='alignedText'>
        {t('answer.gameToken')}: <span style={{ color: 'blue' }}>{id}</span>
      </h2>
      <h1 className='alignedText paragraph'>{theme}</h1>
      <TextInput
        placeholder={t('answer.placeholderOne')}
        onChange={e => setAnswer(e.target.value)}
        style={{ marginBottom: 10 }}
        value={answer}
      />
      <TextInput
        placeholder={t('answer.placeholderTwo')}
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Button
        text={t('answer.button')}
        style={{ backgroundColor: isLoading ? 'gray' : undefined }}
        onClick={handleAnswer}
        disabled={isLoading}
      />
      {error && <h4>{JSON.stringify(error)}</h4>}
    </div>
  )
}

export default AnswerPage
