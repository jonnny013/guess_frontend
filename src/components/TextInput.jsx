import { useEffect, useRef } from 'react'

const TextInput = ({ placeholder, onChange, value, ...others }) => {
  const textareaRef = useRef()

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '30px' // Reset height to calculate new height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Adjust height to fit content
    }
  }
  useEffect(() => {
    adjustHeight()
  }, [value])
  return (
    <div style={{width: '100%', maxWidth: 400}}>
      <textarea
        ref={textareaRef}
        className='text-input marginAuto'
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...others}
      ></textarea>
    </div>
  )
}

export default TextInput
