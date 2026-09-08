'use client'
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { COMPANY } from '../../../lib/data'
import styles from './success.module.css'

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={<div className={styles.page}><div className={styles.card}><p>Loading…</p></div></div>}>
      <BookingSuccessContent />
    </Suspense>
  )
}

function BookingSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [state, setState] = useState({ loading: true, error: '', data: null })

  useEffect(() => {
    if (!sessionId) {
      setState({ loading: false, error: 'Missing checkout session.', data: null })
      return
    }
    fetch(`/api/session-details?session_id=${encodeURIComponent(sessionId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setState({ loading: false, error: data.error, data: null })
        else setState({ loading: false, error: '', data })
      })
      .catch(() => setState({ loading: false, error: 'Could not confirm your payment.', data: null }))
  }, [sessionId])

  const meta = state.data?.metadata || {}

  const whatsappMessage = meta.name
    ? `Hi! I just paid the $${meta.depositAmount} deposit for my beach chair & umbrella delivery.\n` +
      `Name: ${meta.name}\nPhone: ${meta.phone}\nLocation: ${meta.location}\nDate: ${meta.date}${meta.timeWindow ? `\nTime: ${meta.timeWindow}` : ''}\n` +
      `Sets: ${meta.qty}${meta.setup === 'true' ? ' (with setup)' : ''}\nTotal: $${meta.total} (balance $${(Number(meta.total) - Number(meta.depositAmount)).toFixed(2)} due on delivery)` +
      (meta.notes ? `\nNotes: ${meta.notes}` : '')
    : `Hi! I just paid my reservation deposit and would like to confirm the details.`

  const whatsappHref = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {state.loading && <p>Confirming your payment…</p>}

        {!state.loading && state.error && (
          <>
            <div className={styles.icon}>🌊</div>
            <h1 className={styles.title}>Thanks for your reservation!</h1>
            <p>We couldn&apos;t automatically confirm the payment details here, but don&apos;t worry —
              just send us your reservation on WhatsApp and we&apos;ll take care of the rest.</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              Confirm via WhatsApp
            </a>
          </>
        )}

        {!state.loading && !state.error && state.data && (
          <>
            <div className={styles.icon}>{state.data.paid ? '✅' : '⏳'}</div>
            <h1 className={styles.title}>{state.data.paid ? 'Deposit received!' : 'Payment pending'}</h1>
            <p>
              Your ${meta.depositAmount} deposit for <strong>{meta.qty} umbrella + chair set(s)</strong>
              {meta.setup === 'true' ? ' with setup' : ''} on <strong>{meta.date}</strong> is confirmed.
              The remaining <strong>${(Number(meta.total) - Number(meta.depositAmount)).toFixed(2)}</strong> is
              due on delivery.
            </p>
            <p>Tap below to send us the final details on WhatsApp so our team can schedule your delivery.</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              Confirm via WhatsApp
            </a>
          </>
        )}

        <Link href="/" className={styles.homeLink}>← Back to home</Link>
      </div>
    </div>
  )
}
