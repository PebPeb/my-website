import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <div className="tool-bar-title">Bryce Keen</div>
        </li>
        <li style={{ marginLeft: 'auto' }}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <div className="link-container">Home</div>
          </Link>
         </li>
        <li>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <div className="link-container">About</div>
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{textDecoration: 'none'}}>
            <div className="link-container">Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/*
        <li>
          <Link to="/services" style={{textDecoration: 'none'}}>
            <div className="link-container">Services</div>
          </Link>
        </li>
*/

export default NavBar;
