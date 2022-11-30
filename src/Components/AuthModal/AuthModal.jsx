import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserContext } from '../../context/UserContext'

import './AuthModal_style.css'
import Modal from '../Modal/Modal'

const AuthModal = ({children}) => {
  const {user} = useContext(UserContext);

  if(user){
    return (
      <Navigate to={'/'}/>
    )
  }
  return (
    <Modal>
      {children}
    </Modal>
  )
}

export default AuthModal