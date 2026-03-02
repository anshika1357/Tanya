import { Section } from './Section'
import { leadership } from '../data/content'
import styles from './Leadership.module.css'

export function Leadership() {
  return (
    <Section id="leadership" title="Leadership Experience">
      <div className={styles.list}>
        {leadership.map((item, i) => (
          <article key={`${item.org}-${item.role}-${i}`} className={styles.item}>
            <h3 className={styles.org}>{item.org}</h3>
            <div className={styles.roleRow}>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.period}>{item.period}</span>
            </div>
            <ul className={styles.bullets}>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
