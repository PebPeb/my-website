import React from "react";

import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';

function ServicesPage() {
  return (
    <div >
      <NavBar />
      <div className="general-content">
        <h1>Services</h1>
        <p>Slapping Services</p>
      </div>
    </div>
  );
}

export default ServicesPage;
