import React from 'react'
import logo from '../assets/logo.svg'
import basket from '../assets/basket.svg'

const Header = ({children}) => {
  return (
    <div className='header container'>
      {children}
      <img src={logo} className='logo' alt='Little Lemon Logo'/>
      <img className='basket' src={basket} />
      
    </div>
  )
}

export default Header