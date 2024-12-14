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
    <>
      <ul className={sidebar ? "nav active" : "nav"}>
        <button className="close" onClick={toggleSidebar}>
          X
        </button>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
        </li>
        <li>
          <HashLink to='/#about'>About</HashLink>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking" onClick={toggleSidebar}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>

      <img src={menu} className="menu" onClick={toggleSidebar} />
    </>
  );
};

export default Nav;
