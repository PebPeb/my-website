import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css";


function NavBar(props) {
  const myLinks = [
    {link: "/"            , title: "Home"},
    {link: "/projects"    , title: "Projects"},
    {link: "/about"       , title: "About"},
    {link: "/contact"     , title: "Contact"}
  ]

  var once = true;

  return (
    <nav className="navbar" style={props.external ? ({minWidth: 'auto'}) : ({})}>
      <ul>
        <li>
          <div className="tool-bar-title">Bryce Keen</div>
        </li>

        <li style={{marginLeft: 'auto'}}>
          <div className="link-container">
            <FontAwesomeIcon className="mobile-bars" icon={faBars} />
          </div>
        </li>

        {/* Using myLinks generate all the links on the tool bar */}
        {myLinks.map((element, i) => 
          <li key={i} style={once ? ({marginLeft: 'auto'}):({})}>  {/* Only give the margin to the first element*/}
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

      </ul>
    </nav>
  );

}


export default NavBar;