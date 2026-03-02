import { Section } from './Section'
import { projects } from '../data/content'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className={styles.intro}>{projects.intro}</p>
      <div className={styles.list}>
        {projects.items.map((project) => (
          <article key={project.title} className={styles.project}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <div className={styles.block}>
              <h4 className={styles.label}>Background</h4>
              <p className={styles.text}>{project.background}</p>
            </div>
            <div className={styles.block}>
              <h4 className={styles.label}>Aim</h4>
              <ul className={styles.aimList}>
                {project.aim.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <h4 className={styles.label}>Process</h4>
              <p className={styles.text}>{project.process}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
