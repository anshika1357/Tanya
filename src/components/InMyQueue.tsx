import { Section } from './Section'
import { inMyQueue } from '../data/content'
import styles from './InMyQueue.module.css'

export function InMyQueue() {
  return (
    <Section id="queue" title={inMyQueue.title}>
      <p className={styles.subtitle}>{inMyQueue.subtitle}</p>
      <ul className={styles.list}>
        {inMyQueue.items.map((item) => (
          <li key={item.text} className={styles.item}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.title}>{item.text}</span>
              {item.source && <span className={styles.source}>— {item.source}</span>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
