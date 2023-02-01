import React from "react";

import NavBar from '../components/NavBar/NavBar';
import gigachad from "../assets/gigachad.png";


function AboutPage() {
  return (
    <div>
      <NavBar />
      <h1>Me</h1>
      <img src={gigachad} width='300px'></img>
    </div>
  );
}

export default AboutPage;
