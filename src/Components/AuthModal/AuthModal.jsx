import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserContext } from '../../context/UserContext'

import './AuthModal_style.css'

const AuthModal = ({children}) => {
  const {user} = useContext(UserContext);

  const navigate = useNavigate()
  if(user){
    return (
      <Navigate to={'/'}/>
    )
  }
  return (
    <div className='modal-wrapper'>
      <motion.div 
        className='trigger background' 
        onClick={() => navigate('/')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0, zIndex: 20 }}
        animate={{ y: -10, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <div className='auth-modal'>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default AuthModal