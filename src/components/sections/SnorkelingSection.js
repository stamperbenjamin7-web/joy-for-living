import Link from 'next/link'
import { SNORKELING_SCHEDULES } from '../../lib/data'
import styles from './SnorkelingSection.module.css'

export function SnorkelingSection() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <span className="section-label">Featured Experience</span>
            <h2 className="section-title">
              Snorkeling<br /><em>Tours</em>
            </h2>
            <p>
              Discover Aruba's stunning underwater world with three daily departures.
              Visit the colorful reefs of <strong>Boca Catalina</strong> or explore
              the famous <strong>Antilla Shipwreck</strong> — the largest wreck in
              the Caribbean.
            </p>
            <Link href="/booking?activity=snorkeling" className={styles.btn}>
              Book a Snorkeling Tour →
            </Link>
          </div>

          <div className={styles.schedules}>
            {SNORKELING_SCHEDULES.map((sched, i) => (
              <div key={sched.id} className={styles.schedCard}>
                <div className={styles.schedIcon}>{sched.icon}</div>
                <div className={styles.schedInfo}>
                  <div className={styles.schedTime}>{sched.label}</div>
                  <div className={styles.schedLocation}>📍 {sched.location}</div>
                </div>
                <Link
                  href={`/booking?activity=snorkeling&schedule=${sched.id}`}
                  className={styles.schedBtn}
                >
                  Book
                </Link>
              </div>
            ))}

            <div className={styles.includes}>
              <span className={styles.includesTitle}>✦ All tours include</span>
              <div className={styles.includesList}>
                {['Snorkel gear', 'Life vests', 'Expert guide', 'Safety briefing'].map(item => (
                  <span key={item} className={styles.includesItem}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
