import React, { useState } from "react";

import './HomePage.css';

import CardLandscape from '../components/CardLandscape/CardLandscape';
import TitleCard from '../components/Title/TitleCard';
import NavBar from '../components/NavBar/NavBar';

import BlueCircuit from "../assets/BlueCircuit.png";

function HomePage() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
      setMode(mode === "light" ? "dark" : "light");
  };


  let Card1_Title = "RISC-V Single Cycle CPU"
  let Card1_Text = "Developed a cutting-edge computer engineering project to optimize network communication by reducing latency and improving data transfer rates through the integration of software-defined networking. The solution resulted in increased efficiency and improved user experience.";


  return (
    <div>
      <NavBar />

      <TitleCard title="Bryce Keen" image={BlueCircuit}></TitleCard>
      <div style={{height: '40px'}}></div>

      <CardLandscape title={Card1_Title} text={Card1_Text} direction="left" mode={mode} image={BlueCircuit}></CardLandscape>
      <div style={{height: '40px'}}></div>

      <CardLandscape title={Card1_Title} text={Card1_Text} direction="right" mode={mode} image={BlueCircuit}></CardLandscape>
      <div style={{height: '40px'}}></div>

      <CardLandscape title={Card1_Title} text={Card1_Text} direction="left" mode={mode} image={BlueCircuit}></CardLandscape>
      <div style={{height: '40px'}}></div>

    </div>
  );
};

/*
<button onClick={toggleMode}>Toggle Mode</button>
<h1>Welcome to my website!</h1>
<p>This website has a light/dark mode toggle feature.</p>
*/

export default HomePage;
