const Header = () => {
  return (
    <header className='oneHundred row aligned centered' id='header'>
      <div id='instructions' popover='auto'>
        Instructions go here
      </div>
      <h1 className="noMargin">Guess Who!</h1>
      <button className='info-btn' popovertarget='instructions'>
        Info
      </button>
    </header>
  )
}

export default Header
