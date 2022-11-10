import axios from 'axios'
import React, { useRef } from 'react'
import { BASE_URL } from '../../utils/api'
import InputWithLabel from './InputWithLabel'

const LoginModal = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password);
    axios.post(`http://localhost:3001/auth/login`, {email: email, password: password}, {withCredentials: true})
    .then((res) => console.log(res))
  }

  return (
    <div className='auth-modal'>
      <h1 className='auth-title'>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <InputWithLabel
          type='email'
          label='Email'
          inputRef={emailRef}
          
        />
        <InputWithLabel
          type='password'
          label='Password'
          inputRef={passwordRef}
        />
        <button className='auth-button' type='submit'>Login</button>
        <span className='auth-fallback'>Don't have account? <a className='link' href="">Register</a></span>
      </form>
    </div>
  )
}

export default LoginModal