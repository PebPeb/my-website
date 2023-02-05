import React from "react";

import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';
import gigachad from "../../assets/gigachad.png";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="general-content">
        <h1>Me</h1>
        <img src={gigachad} width='300px'></img>
      </div>
    </div>
  );
}

export default AboutPage;
