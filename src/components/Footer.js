import React from 'react'
import logoAlt from '../assets/logoVar.jpg'

const Footer = () => {
  return (
    <>
    <div class="bg-container">
      <div className="footer container">
        <img src={logoAlt} className='footer-logo' alt='little lemon logo'/>
        <p className='footer-copyright'>copyright Little-Lemon 2024</p>
        
          <ul className='footer-nav'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
          </ul>
          <ul className='footer-nav'>
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
          <ul className='footer-nav'>
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    
    
    </>
  )
}

export default Footer