import React, { useEffect } from 'react'
import { redirect, Route, Routes } from 'react-router'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AllNotes from '../pages/AllNotes'
import Navbar from '../Components/Navbar/Navbar'
import {AnimatePresence} from 'framer-motion/dist/framer-motion'
import LoginModal from '../Components/AuthModal/Login'
import RegisterModal from '../Components/AuthModal/Register'

const MainRouter = () => {
  const location = useLocation();

  
  const background = location.state && location.state.background;
  console.log(background);
  return (
    <>
      <AnimatePresence>
      <Routes location={background || location}>
        <Route element={<Navbar/>}>
            <Route path='h' element={<AllNotes/>}>
              <Route path='login' element={<LoginModal/>}/>
              <Route path='register' element={<RegisterModal/>}/>
            </Route>
        </Route>
      </Routes> 
        {
          background && (
            <Routes>
              <Route path='/h/login' element={<LoginModal/>}/>
              <Route path='/h/register' element={<RegisterModal/>}/>
            </Routes>
          )
        }
      </AnimatePresence>
    </>
  )
}

export default MainRouter