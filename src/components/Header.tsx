import { useState } from 'react'
import { about } from '../data/content'
import styles from './Header.module.css'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'queue', label: 'In My Queue' },
  { id: 'writing', label: 'Writing' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <a href="#about" className={styles.logo}>
        {about.name}
      </a>
      <button
        type="button"
        className={styles.menuBtn}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={styles.menuIcon} data-open={open} />
        <span className={styles.menuIcon} data-open={open} />
        <span className={styles.menuIcon} data-open={open} />
      </button>
      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
