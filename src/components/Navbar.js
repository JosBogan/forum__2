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
      <div className="nav_links">Links</div>
    </nav>
  )
}

export default Navbar