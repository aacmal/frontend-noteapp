import React from 'react'
import { Link, Outlet, redirect, useLocation } from 'react-router-dom'

import './Navbar_Style.css'

const Navbar = () => {
  const location = useLocation();
  redirect('/h', {state: {background: location}})
  return (
    <>
      <header>
          <nav>
              <Link to={'/'}>
                  <h1>Notalus</h1>
              </Link>
              <Link className='auth' to={'/h/login'} state={{background: location}}>Login</Link>
          </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Navbar