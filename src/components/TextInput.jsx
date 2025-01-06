const TextInput = ({ placeholder, onChange, value, ...others }) => {
  return (
    <input
    className="text-input"
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...others}
    />
  )
}

export default TextInput
