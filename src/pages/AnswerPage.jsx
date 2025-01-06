import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTheme, postAnswer } from '../services/apiServices'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const AnswerPage = () => {
  const { id } = useParams()
  const [theme, setTheme] = useState()
  const [error, setError] = useState(null)
  const [answer, setAnswer] = useState()
  const [name, setName] = useState()
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getInfo = async () => {
      try {
        setIsLoading(true)
        const result = await getTheme(id)
        console.log(result)
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
    try {
      setIsLoading(true)
      await postAnswer({ answer, name, session: id })
      navigate(`/games/${id}`)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className='column aligned'>
      <h2 className='alignedText'>
        Game Token: <span style={{ color: 'blue' }}>{id}</span>
      </h2>
      <h1 className='alignedText'>{theme}</h1>
      <TextInput
        placeholder='Your answer'
        onChange={e => setAnswer(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <TextInput placeholder='Your name' onChange={e => setName(e.target.value)} />
      <Button text='Send answer' onClick={handleAnswer} disabled={isLoading} />
      {error && <h4>{JSON.stringify(error)}</h4>}
    </div>
  )
}

export default AnswerPage
