import { useTranslation } from 'react-i18next'

const ResultsDisplay = ({ name, guessedAnswer, guessedName, correctName }) => {
  const { t } = useTranslation()
  const isCorrect = guessedName === correctName
  return (
    <div className='column centered' style={{ margin: '12px 0' }}>
      <h5
        className='noMargin alignedText'
        style={{ textDecoration: 'underline', color: isCorrect ? 'green' : 'red' }}
      >
        {guessedAnswer}:
      </h5>
      <h4 className='noMargin alignedText'>
        {isCorrect ? '✅' : '❌'}{' '}
        <span style={{ color: '#2424c4' }}>{name} </span>
        {t('final.chose')} <span style={{ color: '#2424c4' }}>{guessedName}</span>
      </h4>
      {!isCorrect && (
        <h4 className='noMargin alignedText'>
          {t('final.correct')} {correctName}
        </h4>
      )}
    </div>
  )
}

export default ResultsDisplay
