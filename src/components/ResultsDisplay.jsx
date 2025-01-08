import { useTranslation } from "react-i18next"

const ResultsDisplay = ({name, guessedAnswer, guessedName}) => {
  const {t} = useTranslation()
  return (
    <div className='column centered' style={{margin: '12px 0'}}>
      <h5 className='noMargin alignedText' style={{ textDecoration: 'underline' }}>
        {guessedAnswer}:
      </h5>
      <h4 className='noMargin alignedText'>
        {name} {t('final.chose')} {guessedName}
      </h4>
    </div>
  )
}

export default ResultsDisplay
