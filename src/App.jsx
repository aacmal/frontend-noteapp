import axios from 'axios'
import React, { useState, useEffect } from 'react'
import NoteInput from './Components/NoteInput/NoteInput'
import NoteLists from './Components/NoteLists/NoteLists'
import MainRouter from './router/index'
import SearchInput from './Components/SearchInput/SearchInput'
import useLocalStorage from './hooks/useLocalStorage'
import AllNotes from './pages/AllNotes'

import './style.css'
import { getInitialData } from './utils'
import { BASE_URL } from './utils/api'
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