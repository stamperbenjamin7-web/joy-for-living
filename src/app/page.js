import { HeroSection }       from '../components/sections/HeroSection'
import { AboutSection }      from '../components/sections/AboutSection'
import { ActivitiesSection } from '../components/sections/ActivitiesSection'
import { SnorkelingSection } from '../components/sections/SnorkelingSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CapabilityMap }    from '../components/sections/CapabilityMap'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <SnorkelingSection />
      <TestimonialsSection />
      <CapabilityMap />
    </>
  )
}
