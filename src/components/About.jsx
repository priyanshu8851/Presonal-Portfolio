import { links } from "../data/profile.js";
import "./About.css";

export default function About() {
  return (
    <section className="about section-wrap section-block" id="about">
      <div className="section-label">
        <span>01</span> A LITTLE ABOUT ME
      </div>
      <div className="about-content">
        <h2>
          Curious by nature.
          <br />
          <span>Developer by choice.</span>
        </h2>
        <p>
          Hello! I'm Priyanshu, a BCA graduate passionate about web design and
          frontend development. I enjoy creating visually appealing,
          user-friendly websites and responsive interfaces.
        </p>
        <p>
          My interest in technology led me to study computer applications and
          explore programming and web technologies. I value creative problem
          solving and continuous learning as frontend tools and practices
          evolve.
        </p>
        <a
          className="text-link"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          More about me on LinkedIn <span>↗</span>
        </a>
      </div>
      <div className="about-stamp" aria-hidden="true">
        <span>
          ALWAYS
          <br />
          BUILDING
        </span>
        <b>✳</b>
      </div>
    </section>
  );
}
