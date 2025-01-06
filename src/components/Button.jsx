
const Button = ({ text, onClick, ...others }) => {
  return (
    <button className='std-btn' onClick={onClick} {...others}>
      {text}
    </button>
  )
}

export default Button
