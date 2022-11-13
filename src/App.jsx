import React, { useState, useEffect } from 'react'
import MainRouter from './router/index'

import './style.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import UserContextProvider from './context/UserContext.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar/>
        <MainRouter/>
      </UserContextProvider>
    </BrowserRouter>
  )
  
}

export default App