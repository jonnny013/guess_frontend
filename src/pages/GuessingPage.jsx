import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  getARandomAnswerWithNames,
  getPreviouslyFoundAnswer,
  sendMyGuess,
} from '../services/apiServices'
import Button from '../components/Button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const GuessingPage = () => {
  const id = useParams().id
  const [searchParams, setSearchParams] = useSearchParams()
  const previousAnswerId = searchParams.get('prev')
  const [names, setNames] = useState([])
  const [question, setQuestion] = useState()
  const [error, setError] = useState(null)
  const [isCorrect, setIsCorrect] = useState(undefined)
  const theme = searchParams.get('theme')
  const name = searchParams.get('name')
  const navigate = useNavigate()

  useEffect(() => {
    const getResults = async () => {
      try {
        let results
        if (previousAnswerId) {
          results = await getPreviouslyFoundAnswer(previousAnswerId)
        } else {
          results = await getARandomAnswerWithNames(id)
        }
        setNames(results.names)
        setQuestion(results.question)
        setSearchParams({ name, theme, prev: results.question?.id })
      } catch (err) {
        console.log(err)
        setError('something went wrong')
      }
    }
    getResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const handleClick = async clickedId => {
    try {
      const isCorrect = question.id === clickedId
      setIsCorrect(isCorrect)
      const gameId = await sendMyGuess({
        sessionId: parseInt(id),
        answerId: question.id,
        name,
        isCorrect,
      })
      setTimeout(() => {
        navigate(`/final/${id}/?name=${name}&theme=${theme}&gameId=${gameId}`)
      }, 5000)
    } catch (err) {
      console.log(err)
      setError('something went wrong')
    }
  }

  return (
    <div className='centered column oneHundred aligned' style={{ padding: 10 }}>
      {isCorrect && (
        <div id='isCorrect' className='row centered aligned'>
          <DotLottieReact
            src='https://lottie.host/e66c5850-83d0-41f5-b7c0-7a0c81da4afb/LoWAsv99Tg.lottie'
            loop={false}
            autoplay
            speed={1}
          />
        </div>
      )}
      {isCorrect === false && (
        <div id='isFalse' className='row centered aligned'>
          <DotLottieReact
            src='https://lottie.host/04919c23-1007-4aef-b8f6-7c144793be2a/sDKPmJTFg0.lottie'
            loop={false}
            autoplay
          />
        </div>
      )}
      <h1>Guess who said:</h1>
      {theme && <h2 className='alignedText'>{theme}:</h2>}
      {question && (
        <h2 style={{ color: 'blue' }} className='alignedText'>
          {question.answer}
        </h2>
      )}
      <div className='row centered aligned' style={{ gap: 10, overflow: 'scroll' }}>
        {names.length > 0 &&
          names.map(item => (
            <Button
              style={{ backgroundColor: 'blue', color: 'white' }}
              key={item.id}
              text={item.name}
              onClick={() => handleClick(item.id)}
              disabled={isCorrect !== undefined}
            />
          ))}
      </div>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  )
}

export default GuessingPage
