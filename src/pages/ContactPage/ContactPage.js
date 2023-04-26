import React from "react";

import "./ContactPage.css";
import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';

function ContactPage() {
  return (
    <div style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
      <NavBar />
      <div className="contact-content">
        <h1>Contact Baby</h1>
        <p>Give me a ring ring on the tellie tellie</p>
      </div>
    </div>
  );
}

export default ContactPage;
