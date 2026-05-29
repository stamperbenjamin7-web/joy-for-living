import { Suspense } from 'react'
import { BookingSection } from '../../components/sections/BookingSection'

export const metadata = {
  title: 'Book Now – Joy For Living Aruba',
  description: 'Reserva tu aventura en Aruba.',
}

export default function BookingPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <BookingSection />
      </Suspense>
    </div>
  )
}