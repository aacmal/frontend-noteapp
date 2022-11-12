import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import './Navbar_Style.css'

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <header>
          <nav>
              <Link to={'/'}>
                  <h1>Notalus</h1>
              </Link>
              <Link className='auth' to={'/login'} state={{background: location}}>Login</Link>
          </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Navbar