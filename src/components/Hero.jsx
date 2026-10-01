import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <p className="eyebrow">
        {profile.role} · {profile.university}
      </p>
      <h1>
        Hi, I'm {profile.name}.
      </h1>
      <p className="tagline">{profile.tagline}</p>
      <div className="actions">
        <a className="button primary" href="#projects">
          View my projects
        </a>
        {profile.cv && (
          <a className="button" href={`${import.meta.env.BASE_URL}${profile.cv}`} download>
            Download CV
          </a>
        )}
        <a className="button" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  )
}
