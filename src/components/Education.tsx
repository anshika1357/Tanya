import { Section } from './Section'
import { education } from '../data/content'
import styles from './Education.module.css'

export function Education() {
  return (
    <Section id="education" title="Education">
      <p className={styles.intro}>{education.intro}</p>
      <div className={styles.schools}>
        {education.schools.map((school) => (
          <article key={school.name} className={styles.school}>
            <div className={styles.schoolHeader}>
              <h3 className={styles.schoolName}>{school.name}</h3>
              <span className={styles.location}>{school.location}</span>
            </div>
            <p className={styles.degree}>
              {school.degreeLink ? (
                <a href={school.degreeLink} target="_blank" rel="noopener noreferrer">
                  {school.degree}
                </a>
              ) : (
                school.degree
              )}
              {school.period && ` · ${school.period}`}
            </p>
            {school.gpa && <p className={styles.gpa}>{school.gpa}</p>}
            {school.honors.length > 0 && (
              <ul className={styles.honors}>
                {school.honors.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            {school.deansList && (
              <p className={styles.deansList}>Dean&apos;s List: {school.deansList}</p>
            )}
            {school.activities && (
              <p className={styles.activities}>Activities: {school.activities}</p>
            )}
            <p className={styles.description}>{school.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
