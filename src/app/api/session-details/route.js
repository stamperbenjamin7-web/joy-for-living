import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Card payments are not configured yet.' }, { status: 503 })
  }

  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')
  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
  }

  const stripe = new Stripe(secretKey)

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json({
      paid: session.payment_status === 'paid',
      metadata: session.metadata,
      amountTotal: session.amount_total,
    })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Could not retrieve session.' }, { status: 500 })
  }
}
