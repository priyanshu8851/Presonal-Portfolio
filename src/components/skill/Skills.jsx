import React from "react";
import "./skills.css";

const skill_head="<Skills/>";

import  bootstrap from"../../assets/bootstrap_logo.png";
import  html from"../../assets/html_logo.png";
import  css from"../../assets/css_logo.png";
import  js from"../../assets/js_logo.png";
import  react from"../../assets/react_logo.png";
import  tailwind from"../../assets/tailwind.png";
import  vscode from"../../assets/vscode.png";
import  figma from"../../assets/figma.png";
import  photoshop from"../../assets/photoshop.png";
import  github from"../../assets/github.png";


const Skills = () => {
  return (
    <>
      <div className="skills_sec main">
        <div className="container">
          <div className="heading">
            <h2>{skill_head}</h2>
            <span></span>
          </div>
          <div className="skill_content">
        <img src={html} alt="HTML" title='HTML' />
        <img src={css} alt="CSS" title='CSS' />
        <img src={bootstrap} alt="bootstrap" title='Bootstrap' />
        <img src={js} alt="JS" title='JAVASCRIPT' />
        <img src={react} alt="REACT" title='REACT' />
        <img src={tailwind} alt="TAILWIND" title='TAILWIND' />
        <img src={vscode} alt="VSCODE" title='VS-CODE' />
        <img src={figma} alt="FIGMA" title='FIGMA' />
        <img src={photoshop} alt="PHOTOSHOP" title='PHOTOSHOP' />
        <img src={github} alt="GITHUB" title='GITHUB' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
