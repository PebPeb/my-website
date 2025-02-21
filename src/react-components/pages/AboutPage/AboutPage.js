import React from "react";

import "./AboutPage.css"
import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';
import keen from "../../assets/Keen-532.png";

function AboutPage() {
  


  return (
    <div style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
      <NavBar />
      <div className="about-content">
        <h1>About Me</h1>
        <img id="my-image" src={keen}></img>
        <p>
          For the past few years, I've worked as a Computer Engineer on all different kinds of contracts, ranging from reverse engineering, embedded systems, FPGAs, and software integration. I've worked on things that fly in the sky and go boom! all the way down to invisible little data waves. Each project is a new challenge that pushes me to grow and become a better engineer.
        </p>
        <p>
          One of the biggest things I'm passionate about is eduction. As a life long learner, I believe that we don't need to make the schooling process expensive or boring. We just need to add a little bit of life into it to showcase how fascinating the world is.
        </p>
        <p> 
          My hope for this platform is for it to be more than just an archive for my projects. I want to inspire people to learn new things and challenge themselves. I want people to see that they can get joy out of what feels like a trivial project or solving a complicated problem. At the end of the day, I want people to know engineering can be fun. 
        </p>
        <p>
          For now, my website is lacking a little bit of the fun.... But sit back and pull up your huggies, because the content is on its way!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
