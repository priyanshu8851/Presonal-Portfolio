import React from "react";
import './Aside.css'

const Aside = (props) => {

  const skills=".skills()"
  const me=".Home()"
  const project=".projects()"
  const intro=".inrto()"
  const contact=".contact()"
  return (
    <>
      <aside>
        <a href="#me_sec" onClick={()=>props.navFn(!props.navState)}>{me}</a>
        <a href="#aboutsec" onClick={()=>props.navFn(!props.navState)}>{intro}</a>
        <a href="#skillsec" onClick={()=>props.navFn(!props.navState)}>{skills}</a>
        <a href="#projectsec" onClick={()=>props.navFn(!props.navState)}>{project}</a>
        <a href="#contactsec" onClick={()=>props.navFn(!props.navState)}>{contact}</a>
      </aside>
    </>
  );
};

export default Aside;
