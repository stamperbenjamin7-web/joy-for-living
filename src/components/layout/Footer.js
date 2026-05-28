import Link from 'next/link'
import styles from './Footer.module.css'
import { COMPANY } from '../../lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Joy <span>For Living</span></div>
          <p className={styles.tagline}>Watersports & Activities<br />Aruba, Dutch Caribbean</p>
        </div>

        <nav className={styles.nav}>
          <h4 className={styles.navTitle}>Explore</h4>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/activities">Activities</Link></li>
            <li><Link href="/booking">Book Now</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.contact}>
          <h4 className={styles.navTitle}>Contact</h4>
          <p><a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener">{COMPANY.whatsappDisplay}</a></p>
          <p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          <div className={styles.socials}>
            <a href={COMPANY.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href={COMPANY.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Joy For Living Watersports & Activities · Aruba, Dutch Caribbean · All rights reserved</p>
      </div>
    </footer>
  )
}
