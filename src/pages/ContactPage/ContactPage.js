import React from "react";

import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';

function ContactPage() {
  return (
    <div>
      <NavBar />
      <div className="general-content">
        <h1>Contact Baby</h1>
        <p>Give me a ring ring on the tellie tellie</p>
      </div>
    </div>
  );
}

export default ContactPage;
