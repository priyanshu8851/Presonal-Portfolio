import React from "react";
import "./about.css";

const about_head = "<Introduction/>";

const About = () => {
  return (
    <>
      <div className="about main" id="aboutsec">
        <div className="container">
          <div className="heading">
            <h2>{about_head}</h2>
            <span></span>
          </div>
          <div className="about_content">
            <h5>
              Priyanshu | Aspiring Web Designer & Frontend Developer | BCA
              Graduate
            </h5>
            <p>
              Hello! I'm Priyanshu, a recent graduate with a Bachelor's degree in
              Computer Applications (BCA). I am passionate about web designing
              and frontend development, with a keen interest in creating
              visually appealing and user-friendly websites.
            </p>
            <h5>About Me:</h5>
            <p>
              From a young age, I've been fascinated by technology and its
              potential to shape our world. This curiosity led me to pursue a
              BCA, where I've been able to dive deep into the world of computer
              science, learning various programming languages and web
              technologies.
            </p>
            <h5>Skills & Interests:</h5>
            <p>
              Web Designing: I have a strong eye for design and a passion for
              creating aesthetically pleasing and intuitive user interfaces.
              Frontend Development: Proficient in HTML, CSS, JavaScript, and
              React, I enjoy bringing static designs to life with interactive
              and responsive features. Design Tools: Experienced in using Figma
              for designing wireframes and prototypes. Programming Languages:
              Knowledgeable in C and C++ languages. Creative Problem Solving: I
              thrive on tackling challenges and finding innovative solutions to
              improve user experiences. Continuous Learning: I am committed to
              staying updated with the latest industry trends and technologies
              to enhance my skills and knowledge.
            </p>
            <h5>Experience:</h5>
            <p>
              <strong>Web Developer Intern – Knax Technologies (7 Months)</strong><br />
              During my internship at Knax Technologies, I contributed to the
              design and development of client-facing web applications. My work
              involved converting Figma designs into fully functional and responsive
              React components, collaborating with designers and backend developers,
              and learning industry best practices. This experience helped me grow
              technically while gaining hands-on exposure to real-world development environments.
            </p>
            <h5>Goals:</h5>
            <p>
              My goal is to become a skilled web designer and frontend
              developer, contributing to projects that make a difference. I am
              eager to collaborate with like-minded professionals and take on
              exciting opportunities that allow me to grow and develop my
              expertise further.
            </p>
            <h5>Looking for Opportunities:</h5>
            <p>
              I am actively seeking job opportunities in web designing, frontend
              development, and other roles within the tech field. I am
              enthusiastic about applying my skills and knowledge to real-world
              projects and contributing to dynamic teams.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
