import React, { useState } from "react";
import menu from "../assets/icon_hamburger_menu.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className="flex-container">
        <ul className={sidebar ? "nav active" : "nav"}>
          <li>
            <button className="close" onClick={toggleSidebar}>
              X
            </button>
          </li>
          <li>
            <Link to="/" onClick={toggleSidebar} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <HashLink smooth to='#about' className="nav-link" onClick={toggleSidebar}>About</HashLink>
          </li>
          <li>
            <Link to="/menu" className="nav-link" onClick={toggleSidebar}>Menu</Link>
          </li>
          <li>
            <Link to="/booking" onClick={toggleSidebar} className="nav-link">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" className="nav-link" onClick={toggleSidebar}>Order Online</Link>
          </li>
          <li>
            <Link to="login" className="nav-link" onClick={toggleSidebar}>Login</Link>
          </li>
        </ul>
        
        <img src={menu} className="menu" onClick={toggleSidebar} />
      
    </nav>
  );
};

export default Nav;
