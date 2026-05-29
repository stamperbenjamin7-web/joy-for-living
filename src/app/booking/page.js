import { Suspense } from 'react'
import { Suspense } from 'react'
import { BookingSection } from '../../components/sections/BookingSection'

export const metadata = {
  title: 'Book Now – Joy For Living Aruba',
  description: 'Reserve your watersports adventure or island tour in Aruba. Easy online booking with instant confirmation.',
}

export default function BookingPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>Loading...</div>}>
        <BookingSection />
      </Suspense>
    </div>
  )
}