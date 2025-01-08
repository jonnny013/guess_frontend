import { useState } from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { postTheme } from '../services/apiServices'
import { useNavigate } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useTranslation } from 'react-i18next'

const StartPage = () => {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState('')
  const [error, setError] = useState(null)
  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  const list = [
    t('start.dreamVacation'),
    t('start.perfectDay'),
    t('start.holidayTradition'),
    t('start.famousFor'),
    t('start.karaokeSong'),
    t('start.superpower'),
  ]

  const handleTextChange = e => {
    setTheme(e.target.value)
  }

  const handleTokenText = e => {
    setToken(e.target.value)
  }

  const handleStartGame = async () => {
    try {
      setIsLoading(true)
      const result = await postTheme(theme)
      navigate(`/answers/${result.id}`)
    } catch (err) {
      console.log(err)
      setError('something went wrong')
    } finally {
      setIsLoading(null)
    }
  }

  const handleJoinGame = () => {
    navigate(`/answers/${token}`)
  }

  return (
    <div className='column  aligned' style={{ height: '100vh', padding: 10 }}>
      <div style={{ maxHeight: 100 }}>
        <DotLottieReact
          src='https://lottie.host/efe132cd-ad6b-4abd-b6e4-67f6fe23189a/BMJTbx1yK4.lottie'
          loop
          autoplay
        />
      </div>

      <h2 className='alignedText'>{t('start.title')}</h2>
      <p>
        <b>{t('start.descriptionOne')}</b>
      </p>
      <div
        style={{ overflowX: 'scroll', maxWidth: '90%', gap: 10, margin: 0 }}
        className='row aligned'
      >
        {list.map((item, index) => (
          <p
            style={{
              width: 200,
              minWidth: 200,
              margin: 0,
              border: '1px solid gray',
              padding: 5,
              height: 46,
              borderRadius: 6,
              fontSize: i18n.language === 'zh' ? 14 : 16,
            }}
            key={index}
            onClick={() => setTheme(item)}
            className='alignedText'
          >
            {item}
          </p>
        ))}
      </div>
      <p>
        <b>{t('start.descriptionTwo')}</b>
      </p>
      <TextInput
        placeholder={t('start.placeholderOne')}
        onChange={handleTextChange}
        value={theme}
      />
      <Button text={t('start.buttonOne')} onClick={handleStartGame} />

      <h2 className='alignedText'>{t('start.titleTwo')}</h2>

      <TextInput placeholder={t('start.placeholderTwo')} onChange={handleTokenText} />
      <Button text={t('start.buttonTwo')} onClick={handleJoinGame} disabled={isLoading} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default StartPage
