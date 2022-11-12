import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import './Navbar_Style.css'
import Profile from './Profile/Profile';

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <header>
          <nav>
              <Link to={'/'}>
                  <h1>Notalus</h1>
              </Link>
              <Profile/>
          </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Navbar