import React from 'react'
import { useNavigate } from 'react-router-dom'

import LoginModal from './Login'


import './AuthModal_style.css'


const AuthModal = () => {
  const navigate = useNavigate()
  return (
    <div className='modal-wrapper background'>
      <div className='trigger' onClick={() => navigate(-1)}>
        <LoginModal/>
      </div>
    </div>
  )
}

export default AuthModal