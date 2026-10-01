import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section container">
      <h2>About me</h2>
      <div className="about">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="muted">
          Expected graduation: {profile.graduation}
        </p>
      </div>
    </section>
  )
}
