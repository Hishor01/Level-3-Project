import React from 'react'
import '../CSS/Navbar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
        <h1>NavBar</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='auth-buttons'>
        <button className='button1'>Login</button>
        <button className='button2'>Create an Account</button>
        </div>
        </div>
  )
}

export default NavBar