import Link from 'next/link'
import { BEACH_RENTAL, COMPANY } from '../../lib/data'
import { CascadeImage } from '../ui/CascadeImage'
import styles from './BeachRentalSection.module.css'

export function BeachRentalSection() {
  return (
    <section className={`${styles.section} section`} id="beach-rental">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.media}>
            <CascadeImage
              src="/images/activities/umbrella.jpg"
              remoteSrc={BEACH_RENTAL.image}
              alt="Beach umbrella and chairs delivered on the sand"
              className={styles.img}
              eager
              hasFallbackSibling={false}
            />
          </div>

          <div className={styles.text}>
            <span className="section-label">Our Flagship Service</span>
            <h2 className="section-title">
              Beach chairs &amp; umbrella,<br /><em>delivered to you</em>
            </h2>
            <p className={styles.lead}>{BEACH_RENTAL.description}</p>

            <ul className={styles.highlights}>
              {BEACH_RENTAL.highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className={styles.priceCards}>
              <div className={styles.priceCard}>
                <span className={styles.priceCardLabel}>Umbrella + 2 Chairs</span>
                <span className={styles.priceCardValue}>${BEACH_RENTAL.setPrice}</span>
                <span className={styles.priceCardNote}>delivered to your spot</span>
              </div>
              <div className={styles.priceCard}>
                <span className={styles.priceCardLabel}>We set it up for you</span>
                <span className={styles.priceCardValue}>+${BEACH_RENTAL.setupFee}</span>
                <span className={styles.priceCardNote}>includes delivery &amp; setup</span>
              </div>
              <div className={`${styles.priceCard} ${styles.priceCardDeposit}`}>
                <span className={styles.priceCardLabel}>Reserve online now</span>
                <span className={styles.priceCardValue}>${BEACH_RENTAL.depositAmount}</span>
                <span className={styles.priceCardNote}>card deposit · rest paid on delivery</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/booking?service=beach-rental" className={styles.btnPrimary}>
                Reserve &amp; Pay Deposit →
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi! I\'d like to reserve a beach umbrella + 2 chairs for delivery.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
