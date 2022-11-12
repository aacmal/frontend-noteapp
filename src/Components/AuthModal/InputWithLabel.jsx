import React from 'react'

const InputWithLabel = ({type, label, inputRef}) => {
  return (
    <div className='input-group'>
        <label htmlFor={type}>{label}</label>
        <input required ref={inputRef} type={type} id={type} name={type}/>
    </div>
  )
}

export default InputWithLabel