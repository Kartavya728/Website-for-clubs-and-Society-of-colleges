import React from 'react'
import {Link} from 'react-scroll'
import logo from '../images/logo.png'

function NavBar() {
  return ( 
    <div>
      <nav>
        <Link to='./main' className='logo'><img src={logo} alt='logo'/></Link>
        
        
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' className='active' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='features' smooth={true} duration={1000}>About us</Link></li>
            <li><Link to='services' smooth={true} duration={1000}>Events</Link></li>
            <li><Link to='subscribe' smooth={true} duration={1000}>get Notified</Link></li>
            
        </ul>
        <Link to='#' className='hey'>Login</Link>
      </nav>
    </div>
  )
}

export default NavBar
