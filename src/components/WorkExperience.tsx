import { Section } from './Section'
import { work } from '../data/content'
import styles from './WorkExperience.module.css'

export function WorkExperience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className={styles.list}>
        {work.map((job) => (
          <article key={`${job.org}-${job.role}`} className={styles.job}>
            <h3 className={styles.org}>{job.org}</h3>
            <p className={styles.orgDesc}>{job.orgDesc}</p>
            <div className={styles.roleRow}>
              <span className={styles.role}>{job.role}</span>
              <span className={styles.period}>{job.period}</span>
            </div>
            <ul className={styles.bullets}>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {job.projects && (
              <p className={styles.projects}>
                <strong>Projects:</strong> {job.projects}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
