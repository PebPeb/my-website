import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css";


function NavBar(props) {

  const myLinks = [
    {link: "/"            , title: "Home"},
    //{link: "/projects"    , title: "Projects"},
    {link: "/about"       , title: "About"},
    {link: "/contact"     , title: "Contact"}
  ]

  var once = true;


  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {document.body.removeEventListener('click', handleClickOutside);};}, []);

  return (
    <nav className="navbar" style={props.external ? ({minWidth: 'auto'}) : ({})}>
      <ul>
        <li>
          <div className="tool-bar-title">Bryce Keen</div>
        </li>

        <li id="nav-link-mobile"  ref={navRef} onClick={toggleDropdown} style={{marginLeft: 'auto'}}>
          <div className="link-container">
            <FontAwesomeIcon className="mobile-bars" icon={faBars}/>
          </div>

          <ul className="mobile-dropdown" style={{display: 'block'}}>
            {myLinks.map((element, i) => 
              <li id="nav-links"
                  key={i} 
                  style={{marginLeft: once ? 'auto' : '', 
                          display: showDropdown ? 'block' : 'none'}}> 

                {once = false}
                {props.external ? 
                (
                    <a href={element.link} style={{textDecoration: 'none'}}>
                      <div className="link-container" style={{marginLeft: 'auto'}}>{element.title}</div>
                    </a>
                ) : 
                (
                    <Link to={element.link} style={{textDecoration: 'none'}}>
                      <div className="link-container">{element.title}</div>
                    </Link>
                )}
              </li>
            )}
          </ ul>
        </li>

        {/* Using myLinks generate all the links on the tool bar */}
        <div id="nav-links-container" style={{marginLeft: 'auto'}}>
          {myLinks.map((element, i) => 
            <li id="nav-links" key={i} style={once ? ({marginLeft: 'auto'}):({})}>  {/* Only give the margin to the first element*/}
              {once = false}
              {props.external ? 
              (
                  <a href={element.link} style={{textDecoration: 'none'}}>
                    <div className="link-container">{element.title}</div>
                  </a>
              ) : 
              (
                  <Link to={element.link} style={{textDecoration: 'none'}}>
                    <div className="link-container">{element.title}</div>
                  </Link>
              )}
            </li>
          )}
        </div>
      </ul>
    </nav>
  );

}


export default NavBar;