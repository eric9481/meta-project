import React, { useState } from 'react'
import menu from '../assets/icon_hamburger_menu.svg'

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {setSidebar(!sidebar)}

  return (
    <>
      <ul className={sidebar ? "nav active" : "nav"}>
        <button className='close' onClick={toggleSidebar}>X</button>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Menu</a></li>
        <li><a>Reservations</a></li>
        <li><a>Order Online</a></li>
        <li><a>Login</a></li>
      </ul>

      <img src={menu} className='menu' onClick={toggleSidebar} />

    </>

  )
}

export default Nav