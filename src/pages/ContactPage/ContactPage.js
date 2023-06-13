import React from "react";

import "./ContactPage.css";
import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';

function ContactPage() {
  return (
    <div style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
      <NavBar />
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p style={{display: "none"}}> Give me a ring ring on the tellie tellie </p>
        
        <p>Interested in talking about engineering, one of my projects, have a few questions, or just want to talk. I got you!</p>
        <a href="mailto:bryce_keen@outlook.com">
          <p>bryce_keen@outlook.com</p>
        </a>

      </div>
    </div>
  );
}

export default ContactPage;
