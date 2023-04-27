import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>

     
      <img src={project.image}  alt='images'/>
<div>
<a href={project.URL}target="_blank" rel="noopener noreferrer"  >
   <button>Source Code</button>
</a>
<a href={project.LiveDemo}target="_blank" rel="noopener noreferrer" >
<button>LiveDemo</button>
      </a>
      </div>   
      <p>
        <b>Technology:</b> {project.skills}
      </p>
      
    </div>
  );
}

export default ProjectDisplay;
