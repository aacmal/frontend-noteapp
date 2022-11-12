import axios from 'axios'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/api'
import { register } from '../../utils/user'
import Spinner from '../dls/Loading/Spinner'
import AuthModal from './AuthModal'
import InputWithLabel from './InputWithLabel'
import SubmitButton from './SubmitButton'

const RegisterModal = () => {
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  function handleSubmit(event) {
    setLoading(true)
    event.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password);
    // axios.post(`http://localhost:3001/auth/register`, {email: email, password: password}, {withCredentials: true})
    // .then((res) => console.log(res))
    // Register user
    console.log('Registering user');
    register(email, password)
    .then((res) => {
      console.log(res);
      setLoading(false)
      setTimeout(() => {
        navigate('/');
      }, 1000)
    })
    .catch((err) => console.log(err))
  }

  return (
    <AuthModal>
      <h1 className='auth-title'>Register</h1>
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
        <SubmitButton
          loading={loading}
          label='Register'
        />
        <span className='auth-fallback'>
          <span>Already have account?</span>{' '}
          <Link className='link' state={{background: location}} to={'/login'}>Login</Link>
        </span>
      </form>
    </AuthModal>
  )
}

export default RegisterModal