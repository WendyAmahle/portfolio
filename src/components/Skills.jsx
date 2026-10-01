import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.group}>
            <h3>{skill.group}</h3>
            <ul className="tags">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
