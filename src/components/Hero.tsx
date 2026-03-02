import { about } from '../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.inner}>
        <p className={styles.pronouns}>{about.pronouns}</p>
        <h1 className={styles.name}>{about.name}</h1>
        <p className={styles.tagline}>{about.tagline}</p>
        <p className={styles.bio}>{about.bio}</p>
        {about.featureLink && (
          <p className={styles.feature}>
            <a href={about.featureLink.url} target="_blank" rel="noopener noreferrer">
              {about.featureLink.text} →
            </a>
          </p>
        )}
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/tanya-samyak" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
