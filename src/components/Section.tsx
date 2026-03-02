import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.inner}>
        {title && (
          <h2 className={styles.title}>{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
}
