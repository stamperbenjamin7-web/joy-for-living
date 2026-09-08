import { HeroSection }        from '../components/sections/HeroSection'
import { BeachRentalSection } from '../components/sections/BeachRentalSection'
import { ActivitiesSection }  from '../components/sections/ActivitiesSection'
import { BoatsSection }       from '../components/sections/BoatsSection'
import { AboutSection }       from '../components/sections/AboutSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CapabilityMap }      from '../components/sections/CapabilityMap'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BeachRentalSection />
      <ActivitiesSection />
      <BoatsSection />
      <AboutSection />
      <TestimonialsSection />
      <CapabilityMap />
    </>
  )
}
