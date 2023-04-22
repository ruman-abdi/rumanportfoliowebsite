import React from 'react';
import computerIcon from '../CSS - My Site Images/computer.png';
import webDevelopmentIcon from '../CSS - My Site Images/web-development.png';
import uiDesignIcon from '../CSS - My Site Images/UxDESIGN.png';
import responsiveDesignIcon from '../CSS - My Site Images/RES.jpg';
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>
   
      <div className="skill-row">
        <img src={computerIcon} className="skill-icon1" alt="Design & Development Icon" />
        <h4>Design &amp; Development</h4>
        <p>Utilize clean, modern design principles to create visually appealing and user-friendly interfaces.</p>
      </div>
      
      <div className="skill-row">
        <img src={webDevelopmentIcon} className="skill-icon2" alt="Web Development Icon" />
        <h4>Web Development</h4>
        <p>Build web applications using HTML, CSS, JavaScript, and modern front-end frameworks such as React.</p>
      </div>
      
      <div className="skill-row">
        <img src={uiDesignIcon} className="skill-icon3" alt="UI Design Icon" />
        <h4>UI Design</h4>
        <p>Design intuitive user interfaces with a focus on usability, accessibility, and visual hierarchy.</p>
      </div>
      
      <div className="skill-row">
        <img src={responsiveDesignIcon} className="skill-icon4" alt="Responsive Design Icon" />
        <h4>Responsive Design</h4>
        <p>Create responsive websites that adapt seamlessly to various screen sizes and device types.</p>
      </div>
    </div>
  );
}

export default Skills;
