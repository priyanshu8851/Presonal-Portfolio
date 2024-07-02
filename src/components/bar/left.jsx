import React from "react";
import "./bar.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Left = () => {
  return (
    <div className="leftbar">
      <div className="br">
        <svg
          width="8"
          height="445"
          viewBox="0 0 8 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" width="2" height="445" fill="url(#paint0_linear_40_6)" />
          <circle cx="4" cy="441" r="4" fill="#8C2DED" />
          <defs>
            <linearGradient
              id="paint0_linear_40_6"
              x1="4"
              y1="0"
              x2="4"
              y2="445"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0" />
              <stop offset="1" stop-color="#932FF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="icons">
        <div className="bar-icon">
          <a href="https://github.com/priyanshu8851" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="bar-icon">
          <a
            href="https://www.linkedin.com/in/priyanshu-kashyap-developer/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="bar-icon">
          <a href="https://www.instagram.com/x_pika.02/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
