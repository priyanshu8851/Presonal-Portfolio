import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import projects from "../../utils/Projects";

const project_head = "<Projects/>";
const Projects = () => {

  return (
    <>
      <div className="projects main" id="projectsec">
        <div className="container">
          <div className="heading">
            <h2>{project_head}</h2>
            <span></span>
          </div>
          <div className="project-cards">
            {projects.map((project, index) => {
              return <ProjectCard key={index} img={project.img} title={project.name} dis={project.dis} git={project.github} link={project.link} skills={project.technologies} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
