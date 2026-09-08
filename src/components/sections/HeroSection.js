import Link from 'next/link'
import { CascadeImage } from '../ui/CascadeImage'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {/* Cascade: local photo of our Palm Beach kiosk → stock aerial beach photo */}
        <CascadeImage
          src="/images/hero.jpg"
          remoteSrc="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1800&q=80&fit=crop"
          alt="Joy For Living beach setup at Palm Beach, Aruba"
          className={styles.bgImg}
          eager
          hasFallbackSibling={false}
        />
        <div className={styles.overlay}></div>
        <div className={styles.grid}></div>
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>✦ Palm Beach · Aruba · One Happy Island ✦</span>

        <div className={styles.brandPanel}>
          <h1 className={styles.title}>
            Joy <span className={styles.titleAccent}>For</span> Living
          </h1>
          <p className={styles.subtitleBrand}>Watersports &amp; Activities</p>
        </div>

        <p className={styles.subtitle}>
          Beach chairs & umbrellas delivered to your spot, plus sailing, watersports,
          fishing and island tours — all reserved in minutes.
        </p>

        <div className={styles.actions}>
          <a href="#beach-rental" className={styles.btnPrimary}>
            🏖️ Get Chairs &amp; Umbrella Delivered
          </a>
          <Link href="/activities" className={styles.btnOutline}>
            Explore Activities
          </Link>
        </div>

        <div className={styles.stats}>
          {[
            { num: '$25', label: 'Chairs + Umbrella' },
            { num: '$10', label: 'Reserve Deposit' },
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
