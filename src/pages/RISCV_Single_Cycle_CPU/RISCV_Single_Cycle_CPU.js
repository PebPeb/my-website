import React from "react";

import NavBar from '../../components/NavBar/NavBar';
import gigachad from "../../assets/gigachad.png";


function RISCV_Single_Cycle_CPU() {

  let text = "\
    You know when you build a website you would think you would have the content ready\
    to populate that sight ready. You would be wrong. I am what you would call an Innovator\
    in my field of not doing the expected. Now pull up your huggies and wait for the content\
    will come. :)";

  return (
    <div>
      <NavBar />
      <p>{text}</p>
      <h1>Me The Innovator</h1>
      <img src={gigachad} width='300px'></img>
    </div>
  );
}

export default RISCV_Single_Cycle_CPU;
