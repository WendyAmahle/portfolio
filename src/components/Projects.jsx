import { projects } from '../data/projects'

function ProjectCard({ project }) {
  return (
    <article className="card">
      <p className="eyebrow">{project.context}</p>
      <h3>{project.title}</h3>
      <p className="subtitle">{project.subtitle}</p>
      <p>{project.description}</p>
      {project.role && (
        <p>
          <strong>My role:</strong> {project.role}
        </p>
      )}
      <ul className="highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className="tags">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="card-links">
        <a href={project.repo} target="_blank" rel="noreferrer">
          Code ↗
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live demo ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
