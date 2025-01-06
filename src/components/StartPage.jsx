import Button from './Button'
import TextInput from './TextInput'

const StartPage = () => {
  const handleTextChange = e => {
    console.log(e.target.value)
  }

  const handleTokenText = e => {
    console.log(e.target.value)
  }

  const handleStartGame = () => {}
  return (
    <div className='column  aligned' style={{ height: '100vh' }}>
      <h2>Start by choosing a theme</h2>
      <p>options go here</p>
      <p>...Or create your own theme</p>
      <TextInput placeholder='Your theme' onChange={handleTextChange} />
      <Button text='Start a new game' onClick={handleStartGame} />

      <h2>Already have a token?</h2>

      <TextInput placeholder='Token' onChange={handleTokenText} />
      <Button text='Join game' onClick={handleStartGame} />
    </div>
  )
}

export default StartPage
