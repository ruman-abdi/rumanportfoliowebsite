import React from 'react';

import uiDesignIcon from '../CSS - My Site Images/UxDESIGN.png';
import responsiveDesignIcon from '../CSS - My Site Images/RES.jpg';
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>
   
      
      <div className="skill-row">
        <img src={uiDesignIcon} className="skill-icon1" alt="Design & Development Icon" />
        <h4>Design &amp; Development</h4>
        <p>Utilize clean, modern design principles to create visually appealing and user-friendly interfaces.</p>
      </div>
      
      
      <div className="skill-row">
        <img src={responsiveDesignIcon} className="skill-icon4" alt="Responsive Design Icon" />
        <h4>Responsive and Creative Design</h4>
        <p>Create responsive websites that adapt seamlessly , Design intuitive user interfaces with a focus on usability.</p>
      </div>
    </div>
  );
}

export default Skills;
