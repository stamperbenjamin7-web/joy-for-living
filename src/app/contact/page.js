import { ContactSection } from '../../components/sections/ContactSection'

export const metadata = {
  title: 'Contact – Joy For Living Aruba',
  description: 'Get in touch with Joy For Living for bookings, questions, and information about watersports in Aruba.',
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <ContactSection />
    </div>
  )
}
