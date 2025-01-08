import { useEffect, useRef } from 'react'

const TextInput = ({ placeholder, onChange, value, ...others }) => {
  const textareaRef = useRef()

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto' // Reset height to calculate new height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Adjust height to fit content
    }
  }
  useEffect(() => {
    adjustHeight() // Adjust height when the component mounts or value changes
  }, [value])
  return (
    <textarea
      ref={textareaRef}
      className='text-input'
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...others}
    ></textarea>
  )
}

export default TextInput
