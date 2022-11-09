import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AllNotes from '../pages/AllNotes'
import Navbar from '../Components/Navbar/Navbar'
import AuthModal from '../Components/AuthModal/index'

const MainRouter = () => {
  const location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const background = location.state && location.state.background;
  console.log(background);
  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Navbar/>}>
            <Route index element={<AllNotes/>}/>
        </Route>
      </Routes> 
      {
        background ? (
          <Routes>
            <Route path='/login' element={<AuthModal/>}/>
          </Routes>
        ) : undefined
      }
    </>
  )
}

export default MainRouter