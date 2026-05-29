import { TESTIMONIALS } from '../../lib/data'
import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What Guests Say</span>
          <h2 className="section-title">
            Real <em>experiences</em>,<br />real memories
          </h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.meta}>{t.origin} · {t.activity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
