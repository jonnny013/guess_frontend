
const ResultsDisplay = ({name, guessedAnswer, guessedName}) => {
  return (
    <>
      <h5 className='noMargin' style={{textDecoration: 'underline'}}>{guessedAnswer}:</h5>
      <h4 className='noMargin'>
        {name} chose {guessedName}
      </h4>
    </>
  )
}

export default ResultsDisplay
