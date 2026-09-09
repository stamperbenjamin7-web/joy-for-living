import { NextResponse } from 'next/server'
import { PAYPAL_API_BASE, paypalConfigured, getPayPalAccessToken } from '../../../../lib/paypal'

export async function POST(request) {
  if (!paypalConfigured()) {
    return NextResponse.json(
      { error: 'Card payments are not configured yet. Please reserve via WhatsApp instead.' },
      { status: 503 }
    )
  }

  const body = await request.json()
  const { location, date, timeWindow, qty, setup, name, phone, depositAmount, total } = body

  if (!location || !date || !name || !phone || !qty || !depositAmount || !total) {
    return NextResponse.json({ error: 'Missing required booking details.' }, { status: 400 })
  }

  const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const balanceDue = (Number(total) - Number(depositAmount)).toFixed(2)

  // Booking details travel back to us on PayPal's own redirect (as extra query
  // params appended to return_url) — no database or session store needed.
  const returnParams = new URLSearchParams({
    provider: 'paypal',
    location,
    date,
    timeWindow: timeWindow || '',
    qty: String(qty),
    setup: String(!!setup),
    name,
    phone,
    total: String(total),
    depositAmount: String(depositAmount),
  })

  try {
    const accessToken = await getPayPalAccessToken()

    const orderRes = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: `Beach chair & umbrella reservation deposit — ${qty} set(s)${setup ? ' with setup' : ''}, balance $${balanceDue} due on delivery`,
            amount: { currency_code: 'USD', value: Number(depositAmount).toFixed(2) },
          },
        ],
        application_context: {
          brand_name: 'Joy For Living',
          user_action: 'PAY_NOW',
          return_url: `${origin}/booking/success?${returnParams.toString()}`,
          cancel_url: `${origin}/booking?service=beach-rental&canceled=1`,
        },
      }),
    })

    if (!orderRes.ok) {
      return NextResponse.json({ error: 'Could not start checkout.' }, { status: 500 })
    }

    const order = await orderRes.json()
    const approveLink = order.links?.find(l => l.rel === 'approve')?.href
    if (!approveLink) {
      return NextResponse.json({ error: 'Could not start checkout.' }, { status: 500 })
    }

    return NextResponse.json({ url: approveLink })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Could not start checkout.' }, { status: 500 })
  }
}
