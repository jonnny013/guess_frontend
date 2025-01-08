import { useParams, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import { getAllGuesses } from '../services/apiServices'
import ResultsDisplay from '../components/ResultsDisplay'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useTranslation } from 'react-i18next'

const FinalPage = () => {
  const id = useParams().id
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme')
  const gameId = parseInt(searchParams.get('gameId'))
  const [listOfResults, setListOfResults] = useState([])
  const myAnswer = listOfResults.find(a => a?.id === gameId)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const otherAnswers = listOfResults.filter(a => a?.id !== gameId)
  const { t } = useTranslation()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const performers = listOfResults.filter(a => a?.correctName !== a?.chosenName)
  return (
    <div className='centered column oneHundred aligned' style={{ padding: 10 }}>
      <h2 className='alignedText'>{theme}</h2>
      <Button text={t('final.btn')} onClick={getResults} />

      {myAnswer && (
        <>
          <h4 className='noMargin' style={{ color: 'green' }}>
            {t('final.me')}
          </h4>
          <ResultsDisplay
            name={myAnswer.name}
            guessedAnswer={myAnswer.guessedAnswer}
            guessedName={myAnswer.chosenName}
            correctName={myAnswer.correctName}
          />
        </>
      )}
      {otherAnswers.length > 0 && (
        <>
          <h4 className='noMargin' style={{ color: 'blue' }}>
            {t('final.others')}
          </h4>
          {otherAnswers.map(item => (
            <ResultsDisplay
              name={item.name}
              guessedAnswer={item.guessedAnswer}
              guessedName={item.chosenName}
              correctName={item.correctName}
              key={item.id}
            />
          ))}
        </>
      )}
      <button style={{ background: 'white', border: 'none' }} popovertarget='performers'>
        <div style={{ maxHeight: 200, marginTop: 20 }}>
          <h3 className='alignedText'> {t('final.click')}</h3>
          <DotLottieReact
            src='https://lottie.host/2fcd6796-2b25-4e0b-a877-19880462ff78/GKa6Way60G.lottie'
            loop
            autoplay
          />
        </div>
      </button>
      <div id='performers' popover='auto'>
        <h1 className='alignedText'>{t('final.show')}</h1>
        <ul>
          {performers.length > 0 &&
            performers.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p style={{ color: 'purple' }}>Loading...</p>}
    </div>
  )
}

export default FinalPage
