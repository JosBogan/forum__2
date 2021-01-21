import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link className="nav_home_link" to="/"><div className="nav_home_icon">Home</div></Link>
      <div className="nav_search">
        <input className="search" type="text" name="search"/>
      </div>
      <ul className="nav_links">
        <Link to="/auth/login"><li>Login</li></Link>
        <Link to="/auth/register"><li>Register</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar