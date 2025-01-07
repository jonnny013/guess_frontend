import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  getARandomAnswerWithNames,
  getPreviouslyFoundAnswer,
} from '../services/apiServices'
import Button from '../components/Button'

const GuessingPage = () => {
  const id = useParams().id
  const [searchParams, setSearchParams] = useSearchParams()
  const previousAnswerId = searchParams.get('prev')
  const [names, setNames] = useState([])
  const [question, setQuestion] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const getResults = async () => {
      try {
        let results
        if (previousAnswerId) {
          results = await getPreviouslyFoundAnswer(previousAnswerId)
        } else {
          results = await getARandomAnswerWithNames(id)
        }
        console.log(results)
        setNames(results.names)
        setQuestion(results.question)
        setSearchParams({ prev: results.question?.id })
      } catch (err) {
        console.log(err)
        setError('something went wrong')
      }
    }
    getResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <div className='centered column oneHundred aligned'>
      <h1>Guess who said:</h1>
      {question && <h2 style={{ color: 'blue' }}>{question.answer}</h2>}
      <div className='row centered aligned' style={{ gap: 10, overflow: 'scroll' }}>
        {names.length > 0 &&
          names.map(item => (
            <Button
              style={{ backgroundColor: 'blue', color: 'white' }}
              key={item.id}
              text={item.name}
            />
          ))}
      </div>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  )
}

export default GuessingPage
