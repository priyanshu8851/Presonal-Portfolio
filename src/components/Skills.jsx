import { skills } from "../data/profile.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills section-wrap section-block" id="skills">
      <div className="section-label">
        <span>02</span> MY TOOLKIT
      </div>
      <div className="skills-content">
        <h2>
          Tools I use to
          <br />
          <span>make things work.</span>
        </h2>
        <p>
          A few of the tools and technologies I reach for to bring thoughtful
          web experiences to life.
        </p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <article
              className={`skill-card${skill.image ? " has-image" : " no-image"}`}
              key={skill.name}
              style={{ "--skill-index": index }}
            >
              {skill.image ? (
                <img
                  src={skill.image}
                  alt=""
                  loading="lazy"
                  onError={(event) => event.currentTarget.remove()}
                />
              ) : (
                <span className="skill-card-code" aria-hidden="true">
                  &lt;/&gt;
                </span>
              )}
              <h3>{skill.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
