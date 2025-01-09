import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
  const { i18n, t } = useTranslation()
  const handleClick = () => {
    const lang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(lang)
  }
  return (
    <header className='oneHundred row aligned centered' id='header'>
      <div id='instructions' popover='auto'>
        <ol>
          <li>{t('header.stepOne')}</li>
          <li>{t('header.stepTwo')}</li>
          <li>{t('header.stepThree')}</li>
          <li>{t('header.stepFour')}</li>
          <li>{t('header.stepFive')}</li>
          <li>{t('header.stepSix')}</li>
          <li>{t('header.stepSeven')}</li>
          <li>
            <b>{t('header.stepEight')}</b>
          </li>
          <li>{t('header.stepNine')}</li>
        </ol>
      </div>
      <button className='info-btn lang' onClick={handleClick}>
        中/En
      </button>
      <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
        <h1 className='noMargin'>Guess Who!</h1>
      </Link>
      <button className='info-btn info' popovertarget='instructions'>
        {t('header.info')}
      </button>
    </header>
  )
}

export default Header
