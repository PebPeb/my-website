import React, { useState } from "react";

import './HomePage.css';

import CardLandscape from '../components/CardLandscape/CardLandscape';
import TitleCard from '../components/Title/TitleCard';
import NavBar from '../components/NavBar/NavBar';

import BlueCircuit from "../assets/BlueCircuit.png";
import RISC_V from "../assets/RISC_V.png";

function HomePage() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
      setMode(mode === "light" ? "dark" : "light");
  };


  let Card1_Title = "RISC-V Single Cycle CPU"
  let Card1_Text = "\
    In this project I designed a single cycle CPU from scratch! I utilized the RV32I instruction set \
    for this project making my CPU a 32-bit computer. It might be primative in design but she's my baby. \
    My hope is to use what I have learned from this project to explore more \
    complecated designs and ideas!";


  return (
    <div>
      <NavBar />

      <TitleCard title="Bryce Keen" image={BlueCircuit}></TitleCard>
      <div style={{height: '40px'}}></div>

      <CardLandscape title={Card1_Title} text={Card1_Text} direction="left" mode={mode} image={RISC_V}></CardLandscape>
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
