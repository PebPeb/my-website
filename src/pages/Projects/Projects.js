import React from "react";

import "./Projects.css";
import "../GeneralStyle.css";
import NavBar from '../../components/NavBar/NavBar';


function Projects() {

  let text = "\
    This tab is planned to be used for making navigating between projects easier. \
    As of right now the only way to get to projects is from the home page. In the \
    future this will be meant to be the highlights page.";

  return (
    <div>
      <NavBar />
      <div className="general-content">
        <p>{text}</p>
      </div>
    </div>
  );
}


export default Projects;
