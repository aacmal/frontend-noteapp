import React, { useState } from 'react'
import EyeIcon from '../Icons/Eye'
import InputWithLabel from './InputWithLabel'

const PasswordInput = ({passwordRef}) => {
    const [show, setShow] = useState(true)
  return (
    <div className='password-input'>
        <InputWithLabel
            type={show ? 'text' : 'password'}
            label='Password'
            inputRef={passwordRef}
        />
        <div onClick={() => setShow((prevState) => !prevState)}>
          <EyeIcon className="eye-icon" show={show}/>
        </div>
    </div>
  )
}

export default PasswordInput