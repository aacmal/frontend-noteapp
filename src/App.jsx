import React from 'react'
import MainRouter from './router/index'

import './style.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import UserContextProvider from './context/UserContext.jsx'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import NoteContextProvider from './context/NoteContext'


const App = () => {
  return (
    <>
      <ToastContainer
        theme='colored'
        position= "top-right"
        autoClose= {3500}
        hideProgressBar= {true}
        closeOnClick= {true}
        pauseOnHover= {true}
        draggable= {true}
        progress= {undefined}
      />
      <BrowserRouter>
        <UserContextProvider>
          <Navbar/>
          <NoteContextProvider>
            <MainRouter/>
          </NoteContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
  
}

export default App