import React, { useState } from "react";
import Header from "./components/header/Header";
import "./index.css";
import Herosec from "./components/herosection/Herosec";
import Projects from "./components/project/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/skill/Skills";
import About from "./components/About/About";
import Aside from "./components/Aside/Aside";
import Contact from "./components/contact/Contact";
import Left from "./components/bar/left";
import Right from "./components/bar/right";

const App = () => {
  const [aside, setAside] = useState(false);
  return (
    <>
      <Aside navFn={setAside} navState={aside} />
      <div className={aside ? "move mainBody" : "mainBody"}>
        <Header navFn={setAside} navState={aside} />
        <div className="homelayout">

        <div className="bar"><Left/></div>
        <div className="center">
          <Herosec />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <div className="bar"><Right/></div>
        </div>
      </div>
    </>
  );
};

export default App;
