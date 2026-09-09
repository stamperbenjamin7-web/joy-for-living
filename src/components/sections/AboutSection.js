import { CascadeImage } from '../ui/CascadeImage'
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
              Joy For Living is based right on Palm Beach, in front of the Holiday
              Inn Aruba (C Tower). From beach chair &amp; umbrella delivery to
              sailing, watersports, fishing and island tours, we bring the
              adventure to you.
            </p>
            <p>
              Every experience — on the sand or out on the water — is guided by
              passion, safety, and an infectious love for this island paradise.
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
              <CascadeImage
                src="/images/about.jpg"
                remoteSrc="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80&fit=crop"
                alt="Aerial view of Palm Beach, Aruba"
                className={styles.cardMainImg}
                hasFallbackSibling={false}
              />
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
