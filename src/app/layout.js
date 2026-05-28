import '../styles/globals.css'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/ui/WhatsAppFloat'

export const metadata = {
  title: 'Joy For Living – Watersports & Activities Aruba',
  description: 'Premier watersports, island tours and beach experiences in Aruba. Book snorkeling, scuba diving, jet ski, catamaran trips and more.',
  keywords: 'Aruba watersports, snorkeling Aruba, jet ski Aruba, island tours, beach activities Caribbean',
  openGraph: {
    title: 'Joy For Living – Watersports & Activities Aruba',
    description: 'Your adventure starts here. Premium watersports and island experiences on One Happy Island.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
