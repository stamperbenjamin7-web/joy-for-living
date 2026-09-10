'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ACTIVITIES, CATEGORIES } from '../../lib/data'
import { CascadeImage } from '../ui/CascadeImage'
import styles from './ActivitiesSection.module.css'

export function ActivitiesSection({ showAll = false }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.category === activeCategory)

  const displayed = showAll ? filtered : filtered.slice(0, 8)

  return (
    <section className={`${styles.section} section`} id="activities">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">
              Choose your<br /><em>adventure</em>
            </h2>
          </div>
          <div className={styles.tabs}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {displayed.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>

        {!showAll && filtered.length > 8 && (
          <div className={styles.more}>
            <Link href="/activities" className={styles.moreBtn}>
              View All {filtered.length} Activities →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function ActivityCard({ activity }) {
  const localImage = `/images/activities/${activity.id}.jpg`
  const price = activity.priceLabel || (activity.priceAdult ? `$${activity.priceAdult} adult` : 'Offered by us')

  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        {/* Cascade: local photo → stock photo → emoji tile, so real photos can be dropped
            in at public/images/activities/<id>.jpg without touching any code. */}
        <CascadeImage
          src={localImage}
          remoteSrc={activity.image}
          alt={activity.name}
          className={styles.thumbImg}
        />
        <div className={styles.thumbFallback} style={{ display: 'none' }}>
          <span>{activity.emoji}</span>
        </div>
        <div className={styles.thumbOverlay} />
        <span className={styles.categoryBadge}>
          {CATEGORIES.find(c => c.id === activity.category)?.label.replace('All Experiences', '')}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <span className={styles.emoji}>{activity.emoji}</span>
          <div className={styles.name}>{activity.name}</div>
        </div>
        <p className={styles.desc}>{activity.description}</p>
        <div className={styles.meta}>
          {activity.duration && <span className={styles.duration}>⏱ {activity.duration}</span>}
        </div>
        <div className={styles.footer}>
          <span className={styles.schedule}>{price}</span>
          <Link href={`/booking?activity=${activity.id}`} className={styles.bookBtn}>
            Book →
          </Link>
        </div>
      </div>
    </div>
  )
}
