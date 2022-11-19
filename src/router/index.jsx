import React, { useEffect } from 'react'
import { BrowserRouter, useLocation, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import {AnimatePresence} from 'framer-motion'
import LoginModal from '../Components/AuthModal/Login'
import RegisterModal from '../Components/AuthModal/Register'
import AllNotes from '../pages/AllNotes.jsx'
import SingleNote from '../pages/SingleNote'

const MainRouter = () => {
  const location = useLocation();
  
  const background = location.state && location.state.background;
  console.log(background);
  return (
    <>
        <Routes location={background || location}>
          <Route path='/' element={<AllNotes/>}>
              <Route path='login' element={<LoginModal/>}/>
              <Route path='register' element={<RegisterModal/>}/>
          </Route>
          <Route path='/:noteId' element={<SingleNote/>}/>
        </Routes> 
      <AnimatePresence>
          {
            true && (
              <Routes>
                <Route path='login' element={<LoginModal/>}/>
                <Route path='register' element={<RegisterModal/>}/>
              </Routes>
            )
          }
      </AnimatePresence>
    </>
  )
}

export default MainRouter