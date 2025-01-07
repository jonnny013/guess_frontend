import { useParams, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import { getAllGuesses } from '../services/apiServices'
import ResultsDisplay from '../components/ResultsDisplay'

const FinalPage = () => {
  const id = useParams().id
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme')
  const name = searchParams.get('name')
  const gameId = searchParams.get('gameId')
  const [listOfResults, setListOfResults] = useState([])
  const myAnswer = listOfResults.find(a => a?.name === name)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const otherAnswers = listOfResults.filter(a => a?.name !== name)

  const getResults = async () => {
    try {
      setLoading(true)
      setError(false)
      const results = await getAllGuesses(id)
      setListOfResults(results)
    } catch (err) {
      console.log(err)
      setError('something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getResults()
  }, [])
  const performers = listOfResults.filter(a => a?.name !== a.guessedName)
  return (
    <div className='centered column oneHundred aligned' style={{ padding: 10 }}>
      <h2 className='alignedText'>{theme}</h2>
      <Button text='Refresh latest results' onClick={getResults} />

      {myAnswer && (
        <>
          <h4 style={{ color: 'green' }}>Me</h4>
          <ResultsDisplay
            name={name}
            guessedAnswer={myAnswer.guessedAnswer}
            guessedName={myAnswer.guessedName}
          />
        </>
      )}
      {otherAnswers.length > 0 && (
        <>
          <h4 style={{ color: 'blue' }}>Everyone else:</h4>
          {otherAnswers.map(item => (
            <ResultsDisplay
              name={item.name}
              guessedAnswer={item.guessedAnswer}
              guessedName={item.guessedName}
              key={item.id}
            />
          ))}
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p style={{ color: 'purple' }}>Loading...</p>}
    </div>
  )
}

export default FinalPage
