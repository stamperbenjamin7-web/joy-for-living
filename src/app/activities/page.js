import { ActivitiesSection } from '../../components/sections/ActivitiesSection'

export const metadata = {
  title: 'Activities – Joy For Living Aruba',
  description: 'Explore all watersports, land tours, sea tours and beach services offered by Joy For Living in Aruba.',
}

export default function ActivitiesPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <ActivitiesSection showAll />
    </div>
  )
}
