import React from 'react'
import { useNavigate } from 'react-router-dom'

import LoginModal from './Login'


import './AuthModal_style.css'


const AuthModal = () => {
  const navigate = useNavigate()
  return (
    <div className='modal-wrapper'>
      <div className='trigger background' onClick={() => navigate(-1)}>
      </div>
      <LoginModal/>
    </div>
  )
}

export default AuthModal