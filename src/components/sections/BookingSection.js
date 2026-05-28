'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ACTIVITIES } from '../../lib/data'
import styles from './BookingSection.module.css'

export function BookingSection() {
  const searchParams = useSearchParams()

  const [form, setForm] = useState({
    activity: '',
    schedule: '',
    date: '',
    guests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const act = searchParams.get('activity')
    if (act) setForm(f => ({ ...f, activity: act }))
  }, [searchParams])

  const selectedActivity = ACTIVITIES.find(a => a.id === form.activity)
  const isSnorkeling = form.activity === 'snorkeling'

  const today = new Date().toISOString().split('T')[0]

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  function validate() {
    const errs = {}
    if (!form.activity)   errs.activity   = 'Please select an activity'
    if (!form.date)        errs.date       = 'Please choose a date'
    if (!form.guests || form.guests < 1) errs.guests = 'At least 1 guest'
    if (!form.firstName)   errs.firstName  = 'Required'
    if (!form.lastName)    errs.lastName   = 'Required'
    if (!form.email || !form.email.includes('@')) errs.email = 'Valid email required'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className={`${styles.section} section`}>
        <div className="container">
          <div className={styles.success}>
            <div className={styles.successIcon}>🌊</div>
            <h2 className={styles.successTitle}>Booking Request Sent!</h2>
            <p>We've received your request for <strong>{selectedActivity?.name || form.activity}</strong> on <strong>{form.date}</strong>.</p>
            <p>Our team will confirm within 24 hours via email or WhatsApp. Get ready for an amazing adventure!</p>
            <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ activity:'',schedule:'',date:'',guests:'',firstName:'',lastName:'',email:'',phone:'',notes:'' }) }}>
              Make Another Booking
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`${styles.section} section`} id="booking">
      <div className="container">
        <div className={styles.inner}>
          {/* Info side */}
          <div className={styles.info}>
            <span className="section-label">Reserve Your Spot</span>
            <h2 className="section-title">
              Book your<br /><em>adventure</em>
            </h2>
            <p>Fill out the form and our team will confirm your reservation within 24 hours. For urgent bookings, reach us directly on WhatsApp.</p>

            <ul className={styles.features}>
              {[
                'Confirmation within 24 hours',
                'Flexible cancellation (48h before)',
                'Private & group options available',
                'Hotel pickup for most tours',
                'Online payments coming soon',
              ].map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <a
              href="https://wa.me/2970000000?text=Hello! I'd like to book an activity."
              target="_blank"
              rel="noopener"
              className={styles.waBtn}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </a>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h3 className={styles.formTitle}>Reservation Details</h3>

            {/* Activity */}
            <div className={styles.field}>
              <label className={styles.label}>Activity *</label>
              <select
                name="activity"
                value={form.activity}
                onChange={handleChange}
                className={`${styles.input} ${errors.activity ? styles.inputError : ''}`}
              >
                <option value="">Select an activity…</option>
                <optgroup label="🌊 Water Sports">
                  {ACTIVITIES.filter(a => a.category === 'water').map(a => (
                    <option key={a.id} value={a.id}>{a.emoji} {a.name}</option>
                  ))}
                </optgroup>
                <optgroup label="🏍️ Land Tours">
                  {ACTIVITIES.filter(a => a.category === 'tours').map(a => (
                    <option key={a.id} value={a.id}>{a.emoji} {a.name}</option>
                  ))}
                </optgroup>
                <optgroup label="⛵ Sea Tours">
                  {ACTIVITIES.filter(a => a.category === 'sea').map(a => (
                    <option key={a.id} value={a.id}>{a.emoji} {a.name}</option>
                  ))}
                </optgroup>
                <optgroup label="🏖️ Beach Services">
                  {ACTIVITIES.filter(a => a.category === 'beach').map(a => (
                    <option key={a.id} value={a.id}>{a.emoji} {a.name}</option>
                  ))}
                </optgroup>
              </select>
              {errors.activity && <span className={styles.error}>{errors.activity}</span>}
            </div>

            {/* Schedule for snorkeling */}
            {isSnorkeling && (
              <div className={styles.field}>
                <label className={styles.label}>Schedule</label>
                <select name="schedule" value={form.schedule} onChange={handleChange} className={styles.input}>
                  <option value="">Select time…</option>
                  <option value="morning">🌅 9:00 AM – 12:00 PM · Boca Catalina</option>
                  <option value="afternoon">☀️ 1:00 PM – 4:00 PM · Antilla Shipwreck</option>
                  <option value="sunset">🌇 4:30 PM – 7:30 PM · Boca Catalina</option>
                </select>
              </div>
            )}

            {/* Date & Guests */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={today}
                  className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
                />
                {errors.date && <span className={styles.error}>{errors.date}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Guests *</label>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  min="1"
                  max={selectedActivity?.maxGuests || 50}
                  placeholder="2"
                  className={`${styles.input} ${errors.guests ? styles.inputError : ''}`}
                />
                {errors.guests && <span className={styles.error}>{errors.guests}</span>}
              </div>
            </div>

            {/* Name */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                />
                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                />
                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
              </div>
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label className={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@email.com"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label className={styles.label}>WhatsApp / Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (000) 000-0000"
                className={styles.input}
              />
            </div>

            {/* Notes */}
            <div className={styles.field}>
              <label className={styles.label}>Special Requests</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any dietary restrictions, accessibility needs, or special occasions…"
                rows={3}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submit}>
              Send Booking Request →
            </button>

            <p className={styles.disclaimer}>
              * Required fields. We'll confirm via email within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
