'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ACTIVITIES, CATEGORIES, BEACH_RENTAL, BOAT_SCHEDULES, COMPANY } from '../../lib/data'
import styles from './BookingSection.module.css'

const TIME_WINDOWS = [
  { id: 'morning',   label: '8:00 AM – 11:00 AM' },
  { id: 'midday',    label: '11:00 AM – 2:00 PM' },
  { id: 'afternoon', label: '2:00 PM – 5:00 PM' },
]

export function BookingSection() {
  const searchParams = useSearchParams()
  const initialActivity = searchParams.get('activity') || ''
  const [serviceType, setServiceType] = useState(
    searchParams.get('service') === 'beach-rental' || !initialActivity ? 'rental' : 'activity'
  )

  return (
    <section className={`${styles.section} section`} id="booking">
      <div className="container">
        <div className={styles.topHeader}>
          <span className="section-label">Reserve Your Spot</span>
          <h2 className="section-title">
            Book your<br /><em>experience</em>
          </h2>
          <div className={styles.serviceTabs}>
            <button
              className={`${styles.serviceTab} ${serviceType === 'rental' ? styles.serviceTabActive : ''}`}
              onClick={() => setServiceType('rental')}
              type="button"
            >
              🏖️ Beach Chairs &amp; Umbrella Delivery
            </button>
            <button
              className={`${styles.serviceTab} ${serviceType === 'activity' ? styles.serviceTabActive : ''}`}
              onClick={() => setServiceType('activity')}
              type="button"
            >
              ⛵ Activities &amp; Tours
            </button>
          </div>
        </div>

        {serviceType === 'rental'
          ? <RentalBookingForm initialCanceled={searchParams.get('canceled') === '1'} />
          : <ActivityBookingForm initialActivity={initialActivity} />}
      </div>
    </section>
  )
}

// ─── Beach Chair & Umbrella Delivery ──────────────────────────────────────────
function RentalBookingForm({ initialCanceled }) {
  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    location: '', date: '', timeWindow: '', qty: 1, setup: false,
    name: '', phone: '', email: '', notes: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [paymentUnavailable, setPaymentUnavailable] = useState(false)
  const [canceled, setCanceled] = useState(initialCanceled)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const qty = Math.max(1, Number(form.qty) || 1)
  const subtotal = qty * BEACH_RENTAL.setPrice
  const setupTotal = form.setup ? BEACH_RENTAL.setupFee : 0
  const total = subtotal + setupTotal
  const deposit = BEACH_RENTAL.depositAmount
  const balanceDue = Math.max(0, total - deposit)

  function validate() {
    const errs = {}
    if (!form.location) errs.location = 'Tell us where to deliver'
    if (!form.date) errs.date = 'Please choose a date'
    if (!form.name) errs.name = 'Required'
    if (!form.phone) errs.phone = 'Required'
    return errs
  }

  function whatsappSummary() {
    return `Hi! I'd like to reserve beach chairs & an umbrella for delivery.\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nDate: ${form.date}` +
      `${form.timeWindow ? `\nTime: ${TIME_WINDOWS.find(t => t.id === form.timeWindow)?.label}` : ''}\n` +
      `Sets: ${qty}${form.setup ? ' (with setup)' : ''}\nTotal: $${total} · $${deposit} deposit / $${balanceDue} on delivery` +
      (form.notes ? `\nNotes: ${form.notes}` : '')
  }

  async function handlePay(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setCanceled(false)
    try {
      const res = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, qty, total, depositAmount: deposit }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
        return
      }
      setPaymentUnavailable(true)
    } catch {
      setPaymentUnavailable(true)
    }
    setLoading(false)
  }

  return (
    <div className={styles.inner}>
      <div className={styles.info}>
        <p>Tell us where you&apos;re staying and we&apos;ll deliver a small umbrella and two beach
          chairs right to your spot. Reserve online with a small card deposit — pay the rest
          when we arrive.</p>

        <ul className={styles.features}>
          {BEACH_RENTAL.highlights.map(h => <li key={h}>{h}</li>)}
        </ul>
      </div>

      <form className={styles.form} onSubmit={handlePay} noValidate>
        <h3 className={styles.formTitle}>Delivery Details</h3>

        {canceled && (
          <p className={styles.notice}>Your payment was canceled — feel free to try again, or reserve via WhatsApp instead.</p>
        )}

        <div className={styles.field}>
          <label className={styles.label}>Hotel / Beach Location *</label>
          <input
            type="text" name="location" value={form.location} onChange={handleChange}
            placeholder="e.g. Holiday Inn Aruba, C Tower, near beach entrance"
            className={`${styles.input} ${errors.location ? styles.inputError : ''}`}
          />
          {errors.location && <span className={styles.error}>{errors.location}</span>}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Date *</label>
            <input
              type="date" name="date" value={form.date} onChange={handleChange} min={today}
              className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Preferred Time</label>
            <select name="timeWindow" value={form.timeWindow} onChange={handleChange} className={styles.input}>
              <option value="">Any time</option>
              {TIME_WINDOWS.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}># of Umbrella + Chair Sets</label>
          <input
            type="number" name="qty" min="1" max="10" value={form.qty} onChange={handleChange}
            className={styles.input}
          />
        </div>

        <label className={styles.checkboxField}>
          <input type="checkbox" name="setup" checked={form.setup} onChange={handleChange} />
          <span>We set it up for you (+${BEACH_RENTAL.setupFee}, delivery included)</span>
        </label>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name *</label>
            <input
              type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>WhatsApp / Phone *</label>
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email (for your receipt)</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className={styles.input} />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={2}
            placeholder="Anything else we should know?" className={styles.textarea} />
        </div>

        <div className={styles.priceBreakdown}>
          <div className={styles.priceRow}><span>{qty} × Umbrella + 2 Chairs</span><span>${subtotal}</span></div>
          {form.setup && <div className={styles.priceRow}><span>Setup &amp; delivery</span><span>${setupTotal}</span></div>}
          <div className={`${styles.priceRow} ${styles.priceRowTotal}`}><span>Total</span><span>${total}</span></div>
          <div className={styles.priceRow}><span>Deposit due now (card)</span><span>${deposit}</span></div>
          <div className={styles.priceRow}><span>Balance due on delivery</span><span>${balanceDue}</span></div>
        </div>

        {!paymentUnavailable ? (
          <button type="submit" className={styles.payBtn} disabled={loading}>
            {loading ? 'Redirecting to PayPal…' : `Pay $${deposit} Deposit with PayPal →`}
          </button>
        ) : (
          <div className={styles.fallbackNotice}>
            <p>Card payments aren&apos;t available right now — reserve via WhatsApp and we&apos;ll
              send you a secure payment link.</p>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(whatsappSummary())}`}
              target="_blank" rel="noopener noreferrer" className={styles.waBtn}
            >
              Reserve via WhatsApp
            </a>
          </div>
        )}

        <p className={styles.disclaimer}>* Required fields. You&apos;ll be redirected to PayPal to pay only the ${deposit} deposit now — no PayPal account required, a guest card checkout is available too.</p>
      </form>
    </div>
  )
}

// ─── Activities & Tours ────────────────────────────────────────────────────────
function ActivityBookingForm({ initialActivity }) {
  const [form, setForm] = useState({
    activity: initialActivity, date: '', departureTime: '', adults: 2, children: 0,
    firstName: '', lastName: '', email: '', phone: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialActivity) setForm(f => ({ ...f, activity: initialActivity }))
  }, [initialActivity])

  const selectedActivity = ACTIVITIES.find(a => a.id === form.activity)
  const today = new Date().toISOString().split('T')[0]

  const hasAgePricing = !!selectedActivity?.priceAdult
  const isBoat = selectedActivity?.category === 'sailing'
  const estimatedTotal = hasAgePricing
    ? (Number(form.adults || 0) * selectedActivity.priceAdult) + (Number(form.children || 0) * selectedActivity.priceChild)
    : null

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  function validate() {
    const errs = {}
    if (!form.activity) errs.activity = 'Please select an activity'
    if (!form.date) errs.date = 'Please choose a date'
    if (!form.firstName) errs.firstName = 'Required'
    if (!form.lastName) errs.lastName = 'Required'
    if (!form.phone) errs.phone = 'Required'
    return errs
  }

  function whatsappSummary() {
    const priceLine = hasAgePricing
      ? `Estimated total: $${estimatedTotal} (${form.adults} adult / ${form.children} child)`
      : selectedActivity?.priceLabel ? `Pricing: ${selectedActivity.priceLabel}` : ''
    const scheduleLabel = isBoat && form.departureTime
      ? BOAT_SCHEDULES.find(s => s.id === form.departureTime)?.label
      : ''
    return `Hi! I'd like to book ${selectedActivity ? selectedActivity.name : form.activity}.\n` +
      `Date: ${form.date}${scheduleLabel ? `\nDeparture: ${scheduleLabel}` : ''}\n` +
      `Adults: ${form.adults}  Children: ${form.children}\n` +
      `${priceLine ? priceLine + '\n' : ''}` +
      `Name: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}` +
      (form.notes ? `\nNotes: ${form.notes}` : '')
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
      <div className={styles.success}>
        <div className={styles.successIcon}>🌊</div>
        <h2 className={styles.successTitle}>Ready to Confirm!</h2>
        <p>Tap below to send your request for <strong>{selectedActivity?.name || form.activity}</strong> on <strong>{form.date}</strong> directly to our WhatsApp.</p>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(whatsappSummary())}`}
          target="_blank" rel="noopener noreferrer" className={styles.waBtn}
        >
          Send Booking via WhatsApp
        </a>
        <div>
          <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>Edit Details</button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.inner}>
      <div className={styles.info}>
        <p>Pick an activity, fill in your details, and we&apos;ll send everything straight to
          WhatsApp so our team can confirm within 24 hours.</p>

        <ul className={styles.features}>
          {[
            'Confirmation within 24 hours',
            'Flexible cancellation (48h before)',
            'Private & group options available',
            'Hotel pickup for most tours',
          ].map(f => <li key={f}>{f}</li>)}
        </ul>

        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello! I'd like to book an activity.")}`}
          target="_blank" rel="noopener" className={styles.waBtn}
        >
          Chat With Us on WhatsApp
        </a>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h3 className={styles.formTitle}>Reservation Details</h3>

        <div className={styles.field}>
          <label className={styles.label}>Activity *</label>
          <select
            name="activity" value={form.activity} onChange={handleChange}
            className={`${styles.input} ${errors.activity ? styles.inputError : ''}`}
          >
            <option value="">Select an activity…</option>
            {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
              <optgroup label={cat.label} key={cat.id}>
                {ACTIVITIES.filter(a => a.category === cat.id).map(a => (
                  <option key={a.id} value={a.id}>{a.emoji} {a.name}</option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.activity && <span className={styles.error}>{errors.activity}</span>}
          {selectedActivity && (
            <span className={styles.priceHint}>
              {selectedActivity.priceLabel || (selectedActivity.priceAdult ? `$${selectedActivity.priceAdult} adult` : 'Offered by us')}
            </span>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Date *</label>
            <input
              type="date" name="date" value={form.date} onChange={handleChange} min={today}
              className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Adults</label>
            <input type="number" name="adults" min="1" value={form.adults} onChange={handleChange} className={styles.input} />
          </div>
        </div>

        {isBoat && (
          <div className={styles.field}>
            <label className={styles.label}>Departure Time</label>
            <select name="departureTime" value={form.departureTime} onChange={handleChange} className={styles.input}>
              <option value="">Any time</option>
              {BOAT_SCHEDULES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </div>
        )}

        {hasAgePricing && (
          <div className={styles.field}>
            <label className={styles.label}>Children (under 10)</label>
            <input type="number" name="children" min="0" value={form.children} onChange={handleChange} className={styles.input} />
          </div>
        )}

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>First Name *</label>
            <input
              type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="John"
              className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
            />
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Last Name *</label>
            <input
              type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith"
              className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
            />
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>WhatsApp / Phone *</label>
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className={styles.input} />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Special Requests</label>
          <textarea
            name="notes" value={form.notes} onChange={handleChange} rows={3}
            placeholder="Any dietary restrictions, accessibility needs, or special occasions…"
            className={styles.textarea}
          />
        </div>

        {hasAgePricing && (
          <div className={styles.priceBreakdown}>
            <div className={`${styles.priceRow} ${styles.priceRowTotal}`}><span>Estimated Total</span><span>${estimatedTotal}</span></div>
          </div>
        )}

        <button type="submit" className={styles.submit}>Continue to WhatsApp →</button>

        <p className={styles.disclaimer}>* Required fields. We&apos;ll confirm via WhatsApp within 24 hours.</p>
      </form>
    </div>
  )
}
