import Link from 'next/link'
import { BOATS } from '../../lib/data'
import { CascadeImage } from '../ui/CascadeImage'
import styles from './BoatsSection.module.css'

export function BoatsSection() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Featured Experience</span>
          <h2 className="section-title">
            Sailing &amp;<br /><em>Snorkeling</em>
          </h2>
          <p className={styles.intro}>
            Five boats to choose from — every trip includes a snorkeling stop along
            Aruba&apos;s calm turquoise coast. <strong>$70 per adult · $50 per child</strong> (under 10).
          </p>
        </div>

        <div className={styles.grid}>
          {BOATS.map(boat => (
            <div key={boat.id} className={styles.card}>
              <div className={styles.thumb}>
                <CascadeImage
                  src={`/images/activities/${boat.id}.jpg`}
                  remoteSrc={boat.image}
                  alt={boat.name}
                  className={styles.thumbImg}
                />
                <div className={styles.thumbFallback} style={{ display: 'none' }}>
                  <span>{boat.emoji}</span>
                </div>
                <div className={styles.thumbOverlay} />
              </div>
              <div className={styles.body}>
                <div className={styles.name}>{boat.emoji} {boat.name}</div>
                <p className={styles.desc}>{boat.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{boat.priceLabel}</span>
                  <Link href={`/booking?activity=${boat.id}`} className={styles.bookBtn}>Book</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
