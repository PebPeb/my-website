import React, { useState } from "react";

import './HomePage.css';
import '../GeneralStyle.css';

import CardLandscape from '../../components/CardLandscape/CardLandscape';
import TitleCard from '../../components/Title/TitleCard';
import NavBar from '../../components/NavBar/NavBar';

import BlueCircuit from "../../assets/BlueCircuit.png";
import RISC_V from "../../assets/RISC_V_AI.png";
import Retro_BEAN from "../../assets/BEAN_TEST.png"
import BEAN_2_High_Level_Diagram from "../../assets/BEAN-2_High_Level_Diagram.png"

function HomePage() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
      setMode(mode === "light" ? "dark" : "light");
  };


  let Card1_Title = "RISC-V Single Cycle CPU"
  let Card1_Text = "\
    In this project I designed a single cycle CPU from scratch! I utilized the RV32I instruction set \
    for this project making my CPU a 32-bit computer. It might be primitive in design but she's my baby. \
    My hope is to use what I have learned from this project to explore more \
    complicated designs and ideas!";

  let Card_2_Title = "BEAN-1"
  let Card_2_Text = "\
    The BEAN-1 is a single core, RISC-V, 32 bit CPU. This CPU implements the base integer instruction set as defined \
    by the RISC-V ISA (RV32I). The architectural design of the system follows a Von Neumann style machine using one \
    shared memory between the instruction and data memory. \
    ";

  let Card_3_Title = "BEAN-2"
  let Card_3_Text = "\
    This project is a 32-bit, single core, 5-stage pipelined, RISC-V CPU (RV32I). The architectural design of this \
    system follows a Harvard style machine, separating the instruction and data memory. \
    This was an exciting challenge to develop -- from the design to verification.\
  ";


  return (
    <div className="background-container">
      <NavBar/>
      <TitleCard title="B<span class='letter-spacing'>r</span>yce Keen" image={BlueCircuit}></TitleCard>
      <div className="general-content">
        <div className="spacing-div"></div>

        <CardLandscape title={Card_3_Title} text={Card_3_Text} direction="right" mode={mode} 
          image={BEAN_2_High_Level_Diagram} navTo="https://github.com/PebPeb/BEAN-2" static_link={true}>
        </CardLandscape>
        <div className="spacing-div"></div>

        <CardLandscape title={Card_2_Title} text={Card_2_Text} direction="left" mode={mode} 
          image={Retro_BEAN} navTo="https://github.com/PebPeb/BEAN-1" static_link={true}>
        </CardLandscape>
        <div className="spacing-div"></div>

        <CardLandscape title={Card1_Title} text={Card1_Text} direction="right" mode={mode} 
          image={RISC_V} navTo="/projects/Single-Cycle-RV32I.html" static_link={true}>
        </CardLandscape>
        <div className="spacing-div"></div>
        
      </div>
    </div>
  );
};

/*
<button onClick={toggleMode}>Toggle Mode</button>
<h1>Welcome to my website!</h1>
<p>This website has a light/dark mode toggle feature.</p>
*/

export default HomePage;
