import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { BASE_URL } from '../../utils/api'
import { login } from '../../utils/user'
import AuthModal from './AuthModal'
import InputWithLabel from './InputWithLabel'
import SubmitButton from './SubmitButton'
import { ToastContainer, toast } from 'react-toastify'

const LoginModal = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);


  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    login(email, password)
    .then((res) => {
      console.log(res);
      setLoading(false)
      setUser(res.data)
      toast('Logged in successfully')
      setTimeout(() => {
        navigate('/');
      }, 1000)
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
      setError('Invalid email or password')
    })
  }

  return (
    <AuthModal>
      <h1 className='auth-title'>Login</h1>
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
          label='Login'
        />
        <span className='auth-fallback'>
          <span>Don't have account?</span>{' '}
          <Link className='link' state={{background: location}} to={'/register'}>Register</Link>
        </span>
      </form>
    </AuthModal>
  )
}

export default LoginModal