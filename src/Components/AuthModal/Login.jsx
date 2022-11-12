import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BASE_URL } from '../../utils/api'
import AuthModal from './AuthModal'
import InputWithLabel from './InputWithLabel'

const LoginModal = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const location = useLocation();


  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password);
    axios.post(`http://localhost:3001/auth/login`, {email: email, password: password}, {withCredentials: true})
    .then((res) => console.log(res))
  }

  return (
    <AuthModal>
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
        <button className='auth-button' type='submit'>
          <span>Login</span>
        </button>
        <span className='auth-fallback'>
          <span>Don't have account?</span>{' '}
          <Link className='link' state={{background: location}} to={'/register'}>Register</Link>
        </span>
      </form>
    </AuthModal>
  )
}

export default LoginModal