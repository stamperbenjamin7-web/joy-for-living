import Link from 'next/link'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.grid}></div>
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>✦ Aruba · One Happy Island ✦</span>

        <h1 className={styles.title}>
          Feel the <em>Joy</em><br />
          of Living
        </h1>

        <p className={styles.subtitle}>
          Watersports, island tours & unforgettable adventures
          on the most beautiful Caribbean island.
        </p>

        <div className={styles.actions}>
          <Link href="/booking" className={styles.btnPrimary}>
            Book an Experience
          </Link>
          <Link href="/activities" className={styles.btnOutline}>
            Explore Activities
          </Link>
        </div>

        <div className={styles.stats}>
          {[
            { num: '20+', label: 'Activities' },
            { num: '365', label: 'Days/Year' },
            { num: '★ 5', label: 'Star Rated' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.waves}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={styles.wave1}>
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120Z" fill="rgba(10,126,164,0.18)"/>
        </svg>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={styles.wave2}>
          <path d="M0,80 C360,20 720,120 1080,40 C1260,0 1380,80 1440,80 L1440,120 L0,120Z" fill="rgba(6,78,110,0.22)"/>
        </svg>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine}></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
