import React from "react";
import "./herosec.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import heroimage from "../../assets/heroPhoto.png";
import Typewriter from 'typewriter-effect';

const Herosec = () => {
  return (
    <>
      <div id="me_sec" className="herosec main">
        <div className="container">
          <div className="hero-content">
            <span className="grey-txt">Hello, My name is</span>
            <h1 className="lav-txt">Priyanshu</h1>
            <p className="white-txt">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    "Frontend Developer",
                    "Programmer",
                    "MCA Student",
                    "Designer",
                  ],
                }}
              />
            </p>

            <div className="contact-hero">
              <div className="contact-handle">
                <a href="https://github.com/priyanshu8851" target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="contact-handle">
                <a
                  href="https://www.linkedin.com/in/priyanshu-kashyap-developer/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="contact-handle">
                <a href="https://www.instagram.com/x_pika.02/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="hero-resume">
              <p>Download my : </p>
              <a href="/Resume.pdf" download>
                <button>Resume</button>
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroimage} alt="my photo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosec;