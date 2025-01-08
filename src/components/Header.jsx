import { useTranslation } from 'react-i18next'

const Header = () => {
  const { i18n } = useTranslation()
  const handleClick = () => {
    const lang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(lang)
  }
  return (
    <header className='oneHundred row aligned centered' id='header'>
      <div id='instructions' popover='auto'>
        <ol>
          <li>
            One person chooses a theme, you can choose from the list or create your own
          </li>
          <li>
            Press the <q>Start New Game</q> button
          </li>
          <li>
            A token number will be delivered, give the token number to the other players
          </li>
          <li>
            Insert the token and press <q>Join Game</q>
          </li>
          <li>Answer the question and press send</li>
          <li>
            When everyone is finished, start from the newest member and take turns
            guessing who wrote each answer
          </li>
          <li>
            If you guess correctly, you are safe and the person to your right guesses
            next.
          </li>
          <li>
            <b>
              If your guess is wrong, you must give a performance of your choice (song,
              dance, juggling, etc.) for 30 seconds at the end.
            </b>
          </li>
        </ol>
      </div>
      <button className='info-btn lang' onClick={handleClick}>
        中/En
      </button>
      <h1 className='noMargin'>Guess Who!</h1>
      <button className='info-btn info' popovertarget='instructions'>
        Info
      </button>
    </header>
  )
}

export default Header
