import "./Hero.css";
import { links } from "../data/profile.js";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
          </p>
          <h1>
            Building digital
            <br />
            experiences with
            <br />
            <span>thoughtful code.</span>
          </h1>
          <p className="hero-intro">
            Hey, I’m <strong>Priyanshu</strong> — a Web Designer and Frontend
            Developer, and a BCA graduate creating thoughtful, responsive web
            experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <span>↗</span>
            </a>
            <a className="button button-quiet" href="#contact">
              Contact me <span>↓</span>
            </a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="glow" />
          <div className="code-card">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <p>
              <span>const</span> developer = {"{"}
            </p>
            <p className="indent">
              name: <b>"Priyanshu"</b>,
            </p>
            <p className="indent">
              focus: <b>"building"</b>,
            </p>
            <p className="indent">
              curiosity: <b>true</b>
            </p>
            <p>{"}"}</p>
            <div className="code-cursor" />
          </div>
          <span className="art-caption">DESIGN × DEVELOPMENT</span>
        </div>

        <a className="scroll-note" href="#about">
          <span /> SCROLL TO EXPLORE
        </a>
      </div>
    </section>
  );
}
