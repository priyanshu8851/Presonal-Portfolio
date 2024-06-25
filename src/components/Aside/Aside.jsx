import React from "react";
import './Aside.css'

const Aside = () => {

  const skills=".skills()"
  const me=".me()"
  const project=".projects()"
  const intro=".inrto()"
  const contact=".contact()"
  return (
    <>
      <aside>
        <a href="#me_sec">{me}</a>
        <a href="#aboutsec">{intro}</a>
        <a href="#skillsec">{skills}</a>
        <a href="#projectsec">{project}</a>
        <a href="#contactsec">{contact}</a>
      </aside>
    </>
  );
};

export default Aside;
