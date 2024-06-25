import React from 'react'
import Header from './components/header/Header'
import "./index.css"
import Herosec from './components/herosection/Herosec'
import Projects from './components/project/Projects'
import Footer from './components/Footer/Footer'
import Skills from './components/skill/Skills'
import About from './components/About/About'

const App = () => {
  return (
    <>
      <Header/>
      <Herosec/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
