import axios from 'axios'
import classNames from 'classnames'
import React, { useContext, useRef, useState } from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from '../../context/UserContext.jsx'
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
  const {setUser} = useContext(UserContext);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    setLoading(true)
    event.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    register(email, password)
    .then((res) => {
      console.log(res);
      setLoading(false)
      setUser(res.data.data)
      toast('Registered successfully')
      setTimeout(() => {
        navigate('/');
      }, 1000)
    })
    .catch((err) => {
      console.log(err);
      setError(err.response.data.message)
      setLoading(false)
    })
  }

  return (
    <AuthModal>
      <h1 className='auth-title'>Register</h1>
      {error && <p className='error'>{error}</p>}
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