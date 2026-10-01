import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section container contact">
      <h2>Get in touch</h2>
      <p>
        I'm looking for graduate opportunities in software engineering. If you'd like to chat, my
        inbox is open.
      </p>
      <a className="button primary" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className="social">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        {profile.linkedin && (
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}
