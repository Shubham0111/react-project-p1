import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
     <div className='logo'>
        <img src={Logo} alt="logo"/>
     </div>
     <div className='list'>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
     </div>
    </div>
  )
}

export default Navbar