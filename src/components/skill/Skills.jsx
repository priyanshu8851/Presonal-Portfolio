import React from "react";
import "./skills.css";
const skill_head="<Skills/>";

const bootstrap="../src/assets/bootstrap_logo.png";
const c="../src/assets/c_logo.png";
const html="../src/assets/html_logo.png";
const css="../src/assets/css_logo.png";
const js="../src/assets/js_logo.png";
const react="../src/assets/react_logo.png";
const tailwind="../src/assets/tailwind.png";
const vscode="../src/assets/vscode.png";
const figma="../src/assets/figma.png";
const photoshop="../src/assets/photoshop.png";
const github="../src/assets/github.png";
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
