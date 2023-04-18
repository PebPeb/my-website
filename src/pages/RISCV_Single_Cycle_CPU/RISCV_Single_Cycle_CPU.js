import React from "react";

import "./RISCV_Single_Cycle_CPU.css";
import "../GeneralStyle.css";
import NavBar from '../../components/NavBar/NavBar';
import gigachad from "../../assets/gigachad.png";
import rtd from "./test.html"

function RISCV_Single_Cycle_CPU() {
  return (
    <div>
      <NavBar />
      <iframe src={rtd}></iframe>
    </div>
  );
}

/*

function RISCV_Single_Cycle_CPU() {

  let text = "\
    You know when you build a website you would think that you would have the content ready\
    to populate that site ready... You would be wrong. I am what you would call an innovator\
    in my field of not doing the expected. Now pull up your Huggies and wait, for the content\
    will come. :)";

  return (
    <div>
      <NavBar />
      <div className="general-content">
        <p>{text}</p>
        <h1>Me The Innovator</h1>
        <img src={gigachad} width='300px'></img>
      </div>
    </div>
  );
}

*/

export default RISCV_Single_Cycle_CPU;
