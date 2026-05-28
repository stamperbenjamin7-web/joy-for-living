import { CAPABILITY_MAP } from '../../lib/data'
import styles from './CapabilityMap.module.css'

const STATUS_LABELS = {
  'done':        { label: 'Implemented',  color: '#10b981' },
  'in-progress': { label: 'In Progress',  color: '#f59e0b' },
  'planned':     { label: 'Planned',      color: '#6b7280' },
  'optional':    { label: 'Optional (+1)',color: '#8b5cf6' },
}

export function CapabilityMap() {
  return (
    <section className={`${styles.section} section`} id="capability-map">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Prácticum 3 · Taller Unidad 2</span>
          <h2 className="section-title">
            Capability <em>Map</em>
          </h2>
          <p className={styles.intro}>
            Digital transformation map for Joy For Living — outlining core and support
            capabilities being digitalized through this web platform.
          </p>
        </div>

        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>
              <span className={styles.groupDot} style={{ background: '#0A7EA4' }}></span>
              Core Capabilities
            </h3>
            <div className={styles.cards}>
              {CAPABILITY_MAP.core.map(cap => (
                <CapCard key={cap.area} cap={cap} />
              ))}
            </div>
          </div>

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>
              <span className={styles.groupDot} style={{ background: '#F4623A' }}></span>
              Support Capabilities
            </h3>
            <div className={styles.cards}>
              {CAPABILITY_MAP.support.map(cap => (
                <CapCard key={cap.area} cap={cap} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.legend}>
          {Object.entries(STATUS_LABELS).map(([key, val]) => (
            <div key={key} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: val.color }}></span>
              <span>{val.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CapCard({ cap }) {
  const status = STATUS_LABELS[cap.status]
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.capIcon}>{cap.icon}</span>
        <span
          className={styles.status}
          style={{ color: status.color, borderColor: `${status.color}40`, background: `${status.color}12` }}
        >
          {status.label}
        </span>
      </div>
      <h4 className={styles.capTitle}>{cap.area}</h4>
      <p className={styles.capDesc}>{cap.description}</p>
      <ul className={styles.capList}>
        {cap.capabilities.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
