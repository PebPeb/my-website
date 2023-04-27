import React from "react";

import "./ProjectsPage.css";
import "../GeneralStyle.css";
import NavBar from '../../components/NavBar/NavBar';


function ProjectsPage() {

  let text = "\
    This tab is planned to be used for making navigating between projects easier. \
    As of right now the only way to get to projects is from the home page. In the \
    future this will be meant to be the archive for all my projects and the home \
    page for highlights.";

  return (
    <div style={{backgroundColor: '#efefef', minHeight: '100vh'}}>
      <NavBar />
      <div className="projects-content">
        <p>{text}</p>
      </div>
    </div>
  );
}


export default ProjectsPage;
