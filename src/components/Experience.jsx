import "./Experience.css";

const milestones = [
  {
    number: "01",
    kind: "LEARNING",
    title: "Curiosity into craft",
    company: "Building the foundations",
    date: "THE START",
    description:
      "Learning by making: exploring the web, sharpening frontend fundamentals, and turning ideas into useful interfaces.",
    icon: "✳",
  },
  {
    number: "02",
    kind: "INTERNSHIP",
    title: "Web Developer Intern",
    company: "Knax Technologies",
    date: "OCT 2024 — APR 2025",
    description:
      "Contributed to client-facing web applications, translating Figma designs into responsive React components alongside design and backend teams.",
    icon: "↗",
  },
  {
    number: "03",
    kind: "FULL-TIME",
    title: "Frontend Developer",
    company: "Progmattic AI",
    date: "JUN 2025 — PRESENT",
    description:
      "Building responsive web interfaces, bringing designs to life, and connecting UI components with APIs to create clear, useful experiences.",
    icon: "↗",
    current: true,
  },
];

export default function Experience() {
  return (
    <section className="experience section-wrap section-block" id="experience">
      <div className="section-label">
        <span>03</span> EXPERIENCE
      </div>
      <div className="experience-content">
        <div className="experience-heading">
          <div>
            <p className="experience-kicker">A little bit of the journey</p>
            <h2>
              From learning to <span>building.</span>
            </h2>
          </div>
          <p className="experience-intro">
            Each step has brought me closer to the work I love: making thoughtful things for the web.
          </p>
        </div>
        <div className="experience-path" aria-label="Career journey">
          <svg className="experience-route" viewBox="0 0 900 370" fill="none" aria-hidden="true" preserveAspectRatio="none">
            <path d="M105 126 C230 126 218 292 382 292 C547 292 525 100 690 100 C773 100 791 148 840 148" />
            <path className="experience-route-accent" d="M105 126 C230 126 218 292 382 292 C547 292 525 100 690 100 C773 100 791 148 840 148" />
            <path className="experience-route-arrow" d="m827 137 14 11-14 11" />
          </svg>
          {milestones.map((item, index) => (
            <article className={`experience-card experience-card-${index + 1}${item.current ? " is-current" : ""}`} key={item.number}>
              <div className="experience-card-top">
                <span className="experience-card-number">{item.number} / 03</span>
                <span className="experience-card-icon" aria-hidden="true">{item.icon}</span>
              </div>
              <span className="experience-kind">{item.kind}</span>
              <h3>{item.title}</h3>
              <p className="experience-company">{item.company}</p>
              <p className="experience-date">{item.date}{item.current && <span className="experience-live"><i /> CURRENT</span>}</p>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
