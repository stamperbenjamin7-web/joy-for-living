import styles from './AboutSection.module.css'

export function AboutSection() {
  const stats = [
    { num: '20+', label: 'Activities offered' },
    { num: '100%', label: 'Certified guides' },
    { num: '365', label: 'Days a year' },
    { num: '★ 5', label: 'Star rated' },
  ]

  return (
    <section className={`${styles.section} section`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <span className="section-label">Who We Are</span>
            <h2 className={`section-title ${styles.title}`}>
              Born from a <em>love</em><br />for the sea
            </h2>
            <p>
              Joy For Living is Aruba&apos;s premier watersports &amp; activities company,
              crafted for those who seek more than just a vacation — we create
              memories that last a lifetime.
            </p>
            <p>
              From the turquoise waters of Boca Catalina to the historic Antilla
              Shipwreck, every experience is guided by passion, safety, and an
              infectious love for this island paradise.
            </p>

            <div className={styles.stats}>
              {stats.map(s => (
                <div key={s.label} className={styles.stat}>
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.cardMain}>
              <div className={styles.cardEmoji}>🌊</div>
              <div className={styles.cardLabel}>Caribbean Adventures</div>
            </div>
            <div className={styles.cardAccent}>
              <span className={styles.accentEmoji}>☀️</span>
              <span className={styles.accentText}>Aruba</span>
            </div>
            <div className={styles.cardFloat}>
              <span>🤿 Snorkeling</span>
              <span>⛵ Catamaran</span>
              <span>🏍️ UTV Tours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
