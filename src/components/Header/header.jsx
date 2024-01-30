import React from "react";
import logo from "../../images/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <nav>
            <NavLink to="/">Menu</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
