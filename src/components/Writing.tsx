import { Section } from './Section'
import { writing } from '../data/content'
import styles from './Writing.module.css'

export function Writing() {
  return (
    <Section id="writing" title="Writing Sample">
      <p className={styles.intro}>{writing.intro}</p>
      <div className={styles.list}>
        {writing.items.map((item) => (
          <article key={item.title} className={styles.item}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.summary}>{item.summary}</p>
            {item.file && (
              <p className={styles.file}>
                <span className={styles.fileLabel}>Document:</span> {item.file}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
