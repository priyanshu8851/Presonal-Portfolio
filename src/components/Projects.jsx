import { projects } from '../data/projects.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const featuredProjects = projects.slice(0, 5)

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <div className="visual-grid" aria-hidden="true" />
        <div className="project-fallback" aria-hidden="true"><span>↗</span><strong>{project.name}</strong><small>{project.technologies.slice(0, 3).join(' · ')}</small></div>
        <img className="project-image" src={project.image} alt={`${project.name} project preview`} loading="lazy" onLoad={(event) => { event.currentTarget.previousElementSibling.hidden = true }} onError={(event) => { event.currentTarget.hidden = true }} />
        <span className="preview-tag">PROJECT PREVIEW</span>
      </div>
      <div className="project-info">
        <div className="project-copy">
          <span className="project-number">{String(index + 1).padStart(2, '0')} / PROJECT</span>
          <h3>{project.name}{project.subtitle && <small> · {project.subtitle}</small>}</h3>
          <p>{project.description}</p>
          <div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </div>
        <div className="project-links">
          <a className="project-link" href={project.live} target="_blank" rel="noreferrer">Live project <span>↗</span></a>
          <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </div>
    </article>
  )
}

export default function Projects({ standalone = false }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const currentProject = featuredProjects[index]
  const goTo = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= featuredProjects.length || nextIndex === index) return
    setDirection(nextIndex > index ? 1 : -1)
    setIndex(nextIndex)
  }
  const change = (amount) => goTo(index + amount)

  return (
    <section className={`projects section-wrap section-block${standalone ? ' projects-page' : ' landing-projects'}`} id="projects">
      <div className="projects-heading">
        <div><div className="section-label"><span>04</span> SELECTED WORK</div><h2>{standalone ? <>A closer look at <span>my work.</span></> : <>Made with <span>intention.</span></>}</h2></div>
        <p>Good work starts with a good question.<br />Here’s where ideas meet the browser.</p>
      </div>
      {standalone ? <div className="projects-grid">{projects.map((project, projectIndex) => <ProjectCard key={project.name} project={project} index={projectIndex} />)}</div> : <>
        <div className="landing-carousel" aria-roledescription="carousel" aria-label="Selected portfolio projects" tabIndex="0"
          onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); change(-1) } if (event.key === 'ArrowRight') { event.preventDefault(); change(1) } }}
          onTouchStart={(event) => { event.currentTarget.dataset.touchX = event.touches[0].clientX }}
          onTouchEnd={(event) => { const start = Number(event.currentTarget.dataset.touchX); if (!Number.isFinite(start)) return; const delta = event.changedTouches[0].clientX - start; if (Math.abs(delta) > 45) change(delta < 0 ? 1 : -1); delete event.currentTarget.dataset.touchX }}>
          <div className="landing-carousel-stage" style={{ '--slide-offset': `${direction * 32}px` }}>
            {index < featuredProjects.length - 1 && <div className="landing-peek landing-peek-next" aria-hidden="true"><img src={featuredProjects[index + 1].image} alt="" onError={(event) => { event.currentTarget.hidden = true }} /></div>}
            {index > 0 && <div className="landing-peek landing-peek-previous" aria-hidden="true"><img src={featuredProjects[index - 1].image} alt="" onError={(event) => { event.currentTarget.hidden = true }} /></div>}
            <article key={currentProject.name} className="project-card landing-active-card" aria-live="polite" aria-label={`${currentProject.name}, position ${index + 1} of ${featuredProjects.length}`}>
              <div className="project-visual"><div className="visual-grid" aria-hidden="true" /><div className="project-fallback" aria-hidden="true"><span>↗</span><strong>{currentProject.name}</strong><small>{currentProject.technologies.slice(0, 3).join(' · ')}</small></div><img className="project-image" src={currentProject.image} alt={`${currentProject.name} project preview`} onLoad={(event) => { event.currentTarget.previousElementSibling.hidden = true }} onError={(event) => { event.currentTarget.hidden = true }} /><span className="preview-tag">PROJECT PREVIEW</span></div>
              <div className="project-info"><div className="project-copy"><span className="project-number">{String(index + 1).padStart(2, '0')} / PROJECT</span><h3>{currentProject.name}{currentProject.subtitle && <small> · {currentProject.subtitle}</small>}</h3><p>{currentProject.description}</p><div className="tag-row">{currentProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div><div className="project-links"><a className="project-link" href={currentProject.live} target="_blank" rel="noreferrer">Live project <span>↗</span></a><a className="project-link" href={currentProject.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div>
            </article>
          </div>
          <button type="button" className="landing-arrow landing-arrow-previous" onClick={() => change(-1)} disabled={index === 0} aria-label="Previous project">←</button>
          <button type="button" className="landing-arrow landing-arrow-next" onClick={() => change(1)} disabled={index === featuredProjects.length - 1} aria-label="Next project">→</button>
        </div>
        <div className="landing-carousel-meta"><span>PROJECTS</span><div className="landing-dots" role="group" aria-label="Choose project">{featuredProjects.map((project, slide) => <button key={project.name} type="button" onClick={() => goTo(slide)} className={index === slide ? 'active' : ''} aria-label={`Show ${project.name}`} aria-current={index === slide ? 'true' : undefined} />)}</div><span className="landing-position" aria-live="polite">{String(index + 1).padStart(2, '0')} <i>/</i> {String(featuredProjects.length).padStart(2, '0')}</span></div>
        <Link className="projects-more-link" to="/projects">View all projects <span>↗</span></Link>
      </>}
      {standalone && <a className="projects-home-link" href="/#home">Back to home ↑</a>}
    </section>
  )
}
