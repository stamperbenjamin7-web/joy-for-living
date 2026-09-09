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
  // PayPal redirects back with its own `token` (the order id) and `PayerID`
  // appended to our return_url — our original booking details are already
  // sitting right there in the same query string, so no session lookup needed.
  const orderId = searchParams.get('token')
  const meta = {
    location: searchParams.get('location') || '',
    date: searchParams.get('date') || '',
    timeWindow: searchParams.get('timeWindow') || '',
    qty: searchParams.get('qty') || '1',
    setup: searchParams.get('setup') || 'false',
    name: searchParams.get('name') || '',
    phone: searchParams.get('phone') || '',
    total: searchParams.get('total') || '0',
    depositAmount: searchParams.get('depositAmount') || '0',
  }

  const [state, setState] = useState({ loading: true, error: '', paid: false })

  useEffect(() => {
    if (!orderId) {
      setState({ loading: false, error: 'Missing order reference.', paid: false })
      return
    }
    fetch('/api/paypal/capture-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) setState({ loading: false, error: data.error, paid: false })
        else setState({ loading: false, error: '', paid: data.paid })
      })
      .catch(() => setState({ loading: false, error: 'Could not confirm your payment.', paid: false }))
  }, [orderId])

  const balanceDue = (Number(meta.total) - Number(meta.depositAmount)).toFixed(2)

  const whatsappMessage = meta.name
    ? `Hi! I just paid the $${meta.depositAmount} deposit for my beach chair & umbrella delivery.\n` +
      `Name: ${meta.name}\nPhone: ${meta.phone}\nLocation: ${meta.location}\nDate: ${meta.date}${meta.timeWindow ? `\nTime: ${meta.timeWindow}` : ''}\n` +
      `Sets: ${meta.qty}${meta.setup === 'true' ? ' (with setup)' : ''}\nTotal: $${meta.total} (balance $${balanceDue} due on delivery)`
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

        {!state.loading && !state.error && (
          <>
            <div className={styles.icon}>{state.paid ? '✅' : '⏳'}</div>
            <h1 className={styles.title}>{state.paid ? 'Deposit received!' : 'Payment pending'}</h1>
            <p>
              Your ${meta.depositAmount} deposit for <strong>{meta.qty} umbrella + chair set(s)</strong>
              {meta.setup === 'true' ? ' with setup' : ''} on <strong>{meta.date}</strong> is confirmed.
              The remaining <strong>${balanceDue}</strong> is due on delivery.
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
