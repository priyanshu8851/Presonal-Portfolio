import React from 'react'
import "./footer.css"

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className='main'>
        <div className="container">
        <span>Made by Priyanshu</span>
        <div className="contact-hero">
              <div className="contact-handle">
                <a href="https://github.com/priyanshu8851"  target="_blank" ><FaGithub /></a>
              </div>
              <div className="contact-handle">
                <a href="https://www.linkedin.com/in/priyanshu-kashyap-developer/" target="_blank"><FaLinkedinIn /></a>
              </div>
              <div className="contact-handle">
                <a href="https://www.instagram.com/x_pika.02/" target="_blank"><FaInstagram /></a>
              </div>
            </div>
        </div>
        
      </footer>
    </>
  )
}

export default Footer
