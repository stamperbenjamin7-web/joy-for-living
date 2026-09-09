import { NextResponse } from 'next/server'
import { PAYPAL_API_BASE, paypalConfigured, getPayPalAccessToken } from '../../../../lib/paypal'

export async function POST(request) {
  if (!paypalConfigured()) {
    return NextResponse.json({ error: 'Card payments are not configured yet.' }, { status: 503 })
  }

  const { orderId } = await request.json()
  if (!orderId) {
    return NextResponse.json({ error: 'Missing orderId' }, { status: 400 })
  }

  try {
    const accessToken = await getPayPalAccessToken()

    const captureRes = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await captureRes.json()
    // Already-captured orders come back as 422/ORDER_ALREADY_CAPTURED (e.g. on a
    // page refresh) — treat that as a successful confirmation too.
    const paid = data.status === 'COMPLETED' || data.details?.[0]?.issue === 'ORDER_ALREADY_CAPTURED'

    return NextResponse.json({ paid, status: data.status || 'ALREADY_CAPTURED' })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Could not confirm payment.' }, { status: 500 })
  }
}
