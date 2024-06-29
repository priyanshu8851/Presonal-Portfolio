import React from "react";
import "./projectCard.css";

const ProjectCard = (props) => {


  return (
    <>


      <div className="project-card">
        <img src={props.img} alt="Project view" />
       <div className="card-content">
       <h3>{props.title}</h3>
        <p>{props.skills}</p>
        <span>{props.dis}</span>
        <div className="project-btn">
          <button className="btn1">
            <a href={props.git} target="_blank">
              Source Code
            </a>
          </button>
          <button className="btn2">
            <a href={props.link} target="_blank">
              Demo
            </a>
          </button>
        </div>
       </div>
       
      </div>
    </>
  );
};

export default ProjectCard;
