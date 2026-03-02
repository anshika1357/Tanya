import { about } from '../data/content'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>{about.name}</p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/tanya-samyak" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://sites.google.com/view/tanya-samyak" target="_blank" rel="noopener noreferrer">
            Google Sites
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {about.name}. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  )
}
