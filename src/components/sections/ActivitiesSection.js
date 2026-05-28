'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ACTIVITIES, CATEGORIES } from '../../lib/data'
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
  return (
    <div className={styles.card}>
      <div
        className={styles.thumb}
        style={{ background: `linear-gradient(135deg, ${activity.color} 0%, ${activity.colorB} 100%)` }}
      >
        <span className={styles.emoji}>{activity.emoji}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{activity.name}</div>
        <p className={styles.desc}>{activity.description}</p>
        <div className={styles.meta}>
          <div className={styles.metaItems}>
            <span className={styles.duration}>⏱ {activity.duration}</span>
            {activity.maxGuests && (
              <span className={styles.guests}>👥 Max {activity.maxGuests}</span>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.schedule}>{activity.schedule}</span>
          <Link href={`/booking?activity=${activity.id}`} className={styles.bookBtn}>
            Book →
          </Link>
        </div>
      </div>
    </div>
  )
}
