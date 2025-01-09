import { useTranslation } from 'react-i18next'

const ResultsDisplay = ({ name, guessedAnswer, guessedName, correctName }) => {
  const { t } = useTranslation()
  const isCorrect = guessedName === correctName
  return (
    <div
      className='column centered'
      style={{
        margin: '12px 0',
        maxWidth: 400,
        width: '90%',
        border: '1px solid gray',
        borderRadius: 8,
        overflow: 'clip'
      }}
    >
      <div
        style={{ padding: 10, backgroundColor: isCorrect ? '#5bed5b' : '#f44e4e' }}
        className='oneHundred'
      >
        <h5
          className='noMargin alignedText paragraph'
          style={{ textDecoration: 'underline', color: 'black' }}
        >
          {guessedAnswer}:
        </h5>
      </div>
      <div style={{ padding: 10, gap: 10 }} className='column centered aligned'>
        <h4 className='noMargin alignedText'>
          {isCorrect ? '✅' : '❌'} <span style={{ color: '#2424c4' }}>{name} </span>
          {t('final.chose')} <span style={{ color: '#2424c4' }}>{guessedName}</span>
        </h4>
        {!isCorrect && (
          <h4 className='noMargin alignedText'>
            {t('final.correct')} {correctName}
          </h4>
        )}
      </div>
    </div>
  )
}

export default ResultsDisplay
