import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json(
      { error: 'Card payments are not configured yet. Please reserve via WhatsApp instead.' },
      { status: 503 }
    )
  }

  const body = await request.json()
  const { location, date, timeWindow, qty, setup, name, phone, email, notes, depositAmount, total } = body

  if (!location || !date || !name || !phone || !qty || !depositAmount || !total) {
    return NextResponse.json({ error: 'Missing required booking details.' }, { status: 400 })
  }

  const stripe = new Stripe(secretKey)
  const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const balanceDue = (Number(total) - Number(depositAmount)).toFixed(2)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Joy For Living — Beach Chair & Umbrella Reservation Deposit',
              description: `${qty} set(s) of umbrella + 2 chairs${setup ? ' with delivery setup' : ''} · balance of $${balanceDue} due on delivery`,
            },
            unit_amount: Math.round(Number(depositAmount) * 100),
          },
          quantity: 1,
        },
      ],
      customer_email: email || undefined,
      metadata: {
        service: 'beach-rental',
        location,
        date,
        timeWindow: timeWindow || '',
        qty: String(qty),
        setup: String(!!setup),
        name,
        phone,
        notes: notes || '',
        total: String(total),
        depositAmount: String(depositAmount),
      },
      success_url: `${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/booking?service=beach-rental&canceled=1`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Could not start checkout.' }, { status: 500 })
  }
}
