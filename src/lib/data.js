// ─── Company Info ─────────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Joy For Living',
  tagline: 'Watersports & Activities',
  location: 'Aruba, Dutch Caribbean',
  whatsapp: '2976610531',
  whatsappDisplay: '+297 661 0531',
  email: 'info@joyforliving.com',
  instagram: 'https://instagram.com/joyforlivingaruba',
  facebook: 'https://facebook.com/joyforlivingaruba',
}

export const SNORKELING_SCHEDULES = [
  { id: 'morning',   label: '9:00 AM – 12:00 PM', icon: '🌅', location: 'Boca Catalina' },
  { id: 'afternoon', label: '1:00 PM – 4:00 PM',  icon: '☀️', location: 'Antilla Shipwreck' },
  { id: 'sunset',    label: '4:30 PM – 7:30 PM',  icon: '🌇', location: 'Boca Catalina' },
]

export const CATEGORIES = [
  { id: 'all',   label: 'All Experiences' },
  { id: 'water', label: 'Water Sports' },
  { id: 'tours', label: 'Land Tours' },
  { id: 'sea',   label: 'Sea Tours' },
  { id: 'beach', label: 'Beach Services' },
]

export const ACTIVITIES = [

  // ── WATER SPORTS ────────────────────────────────────────────────────────────
  {
    id: 'snorkeling',
    category: 'water',
    name: 'Snorkeling',
    emoji: '🤿',
    // Snorkeler underwater with tropical fish
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&fit=crop',
    color: '#0A7EA4', colorB: '#064E6E',
    description: 'Explore vibrant coral reefs and the legendary Antilla Shipwreck with our expert guides.',
    duration: '3 hours', schedule: '9AM · 1PM · 4:30PM', maxGuests: 20,
    highlights: ['Boca Catalina reef', 'Antilla Shipwreck', 'Snorkel gear included', 'Expert guides'],
  },
  {
    id: 'scuba',
    category: 'water',
    name: 'Scuba Diving',
    emoji: '🫧',
    // Scuba diver underwater near coral
    image: 'https://images.unsplash.com/photo-1463790191518-3d7b8e24df4a?w=600&q=80&fit=crop',
    color: '#0D9488', colorB: '#065f46',
    description: 'Discover Aruba\'s breathtaking underwater world with certified PADI instructors.',
    duration: '3 hours', schedule: 'Morning & Afternoon', maxGuests: 8,
    highlights: ['PADI certified guides', 'Equipment included', 'All skill levels', 'Reef & wreck dives'],
  },
  {
    id: 'jetski',
    category: 'water',
    name: 'Jet Ski',
    emoji: '🚤',
    // Jet ski speeding on blue ocean water
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80&fit=crop',
    color: '#F4623A', colorB: '#c94520',
    description: 'Race across crystal-clear Caribbean waves on high-powered jet skis. Pure adrenaline.',
    duration: '30–60 min', schedule: 'Daily, flexible', maxGuests: 2,
    highlights: ['Latest model skis', 'Safety briefing', 'Solo or tandem', 'Scenic route'],
  },
  {
    id: 'parasailing',
    category: 'water',
    name: 'Parasailing',
    emoji: '🪂',
    // Person parasailing high above the ocean with parachute
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80&fit=crop',
    color: '#0A7EA4', colorB: '#021825',
    description: 'Soar 400 feet above Aruba and take in the most stunning panoramic island views.',
    duration: '1 hour', schedule: 'Daily availability', maxGuests: 3,
    highlights: ['Panoramic views', 'Professional crew', 'Tandem available', 'Photo opportunities'],
  },
  {
    id: 'banana',
    category: 'water',
    name: 'Banana Boat',
    emoji: '🍌',
    // Group of people on banana boat being pulled across water
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80&fit=crop',
    color: '#C89B3C', colorB: '#8a6b20',
    description: 'Hold on tight for a wild, fun-filled ride! Perfect for groups, families, and laughs.',
    duration: '20 min', schedule: 'Daily, flexible', maxGuests: 8,
    highlights: ['Family friendly', 'Group activity', 'Guided by boat', 'Life vests included'],
  },
  {
    id: 'tube',
    category: 'water',
    name: 'Tube Rides',
    emoji: '🫶',
    // People on inflatable tubes being pulled on water
    image: 'https://images.unsplash.com/photo-1561463978-049f20d4ede3?w=600&q=80&fit=crop',
    color: '#0D9488', colorB: '#065f46',
    description: 'Experience the thrill of being pulled across the waves on an inflatable tube.',
    duration: '20 min', schedule: 'Daily, flexible', maxGuests: 4,
    highlights: ['High speed thrills', 'Suitable for teens+', 'Safety equipment', 'Fun guaranteed'],
  },
  {
    id: 'paddle',
    category: 'water',
    name: 'Paddle Board',
    emoji: '🏄',
    // Person stand-up paddleboarding on calm clear ocean water
    image: 'https://images.unsplash.com/photo-1531722569936-825d4eea2573?w=600&q=80&fit=crop',
    color: '#0A7EA4', colorB: '#064E6E',
    description: 'Glide at your own pace across Aruba\'s calm, crystal-clear shoreline waters.',
    duration: 'Half / Full day', schedule: 'All day', maxGuests: 10,
    highlights: ['Beginner friendly', 'Calm waters', 'Core workout', 'Guided or solo'],
  },
  {
    id: 'kayak',
    category: 'water',
    name: 'Kayak',
    emoji: '🛶',
    // Two people kayaking on turquoise tropical water
    image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80&fit=crop',
    color: '#C89B3C', colorB: '#7a5a10',
    description: 'Explore Aruba\'s coastline at your own rhythm in a single or double kayak.',
    duration: 'Half / Full day', schedule: 'All day', maxGuests: 10,
    highlights: ['Single & double', 'Coastal exploration', 'No experience needed', 'Maps provided'],
  },
  {
    id: 'windsurf',
    category: 'water',
    name: 'Windsurf',
    emoji: '🌬️',
    // Windsurfer with colorful sail on blue water
    image: 'https://images.unsplash.com/photo-1504184130209-67eba03baa4e?w=600&q=80&fit=crop',
    color: '#0D9488', colorB: '#064E6E',
    description: 'Aruba is one of the world\'s top windsurfing destinations. Learn or advance your skills.',
    duration: '2–4 hours', schedule: 'Morning lessons', maxGuests: 6,
    highlights: ['World-class winds', 'Beginner lessons', 'Equipment included', 'Expert instructors'],
  },

  // ── LAND TOURS ──────────────────────────────────────────────────────────────
  {
    id: 'utv',
    category: 'tours',
    name: 'UTV Tours',
    emoji: '🏍️',
    // Side-by-side UTV off-road vehicle kicking up dust on trail
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=600&q=80&fit=crop',
    color: '#C89B3C', colorB: '#92660A',
    description: 'Conquer Aruba\'s rugged terrain in a side-by-side UTV. Hidden treasures await off-road.',
    duration: '3–4 hours', schedule: 'Morning & Afternoon', maxGuests: 4,
    highlights: ['Off-road trails', 'Natural Pools', 'Arikok Park', 'Helmets & gear included'],
  },
  {
    id: 'atv',
    category: 'tours',
    name: 'ATV Tours',
    emoji: '🏔️',
    // ATV quad bike rider on outdoor dirt trail with dust cloud
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    color: '#F4623A', colorB: '#c94520',
    description: 'Single-rider ATVs for solo adventurers. Explore the wild north coast of Aruba.',
    duration: '3–4 hours', schedule: 'Morning & Afternoon', maxGuests: 10,
    highlights: ['Solo adventure', 'Wild north coast', 'Aloe vera fields', 'Lighthouse visit'],
  },
  {
    id: 'jeep',
    category: 'tours',
    name: 'Jeep Safari',
    emoji: '🚙',
    // Red Jeep Wrangler on rugged off-road trail in nature
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80&fit=crop',
    color: '#0D9488', colorB: '#065f46',
    description: 'Island-wide exploration in a 4x4 Jeep. Natural bridges, Arikok National Park, and more.',
    duration: 'Half / Full day', schedule: 'Morning', maxGuests: 6,
    highlights: ['Natural Bridge ruins', 'Arikok National Park', 'Conchi Natural Pool', 'Snack & water included'],
  },
  {
    id: 'bus',
    category: 'tours',
    name: 'Bus Tours',
    emoji: '🚌',
    // Aerial view of beautiful Caribbean island coastline
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80&fit=crop',
    color: '#1e3a5f', colorB: '#0a1929',
    description: 'Comfortable air-conditioned bus tours covering all major sights around the island.',
    duration: '4 hours', schedule: 'Daily departures', maxGuests: 40,
    highlights: ['Air-conditioned', 'Guided commentary', 'Hotel pickup', 'All sights covered'],
  },
  {
    id: 'private',
    category: 'tours',
    name: 'Private Tours',
    emoji: '⭐',
    // Couple enjoying scenic tropical island viewpoint
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80&fit=crop',
    color: '#C89B3C', colorB: '#7a5a10',
    description: 'Fully customized private island experiences tailored exactly to your group\'s wishes.',
    duration: 'Custom', schedule: 'By arrangement', maxGuests: 20,
    highlights: ['Fully customized', 'Private guide', 'Any vehicle', 'Flexible itinerary'],
  },

  // ── SEA TOURS ───────────────────────────────────────────────────────────────
  {
    id: 'catamaran',
    category: 'sea',
    name: 'Catamaran Trips',
    emoji: '⛵',
    // Sailing catamaran on turquoise Caribbean water at golden sunset
    image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=600&q=80&fit=crop',
    color: '#0A7EA4', colorB: '#064E6E',
    description: 'Sail the Caribbean on a luxury catamaran with snorkeling stops, open bar & sunset cruises.',
    duration: '3 hours', schedule: 'Morning & Sunset', maxGuests: 30,
    highlights: ['Open bar', 'Snorkeling stop', 'Sunset option', 'Music on board'],
  },
  {
    id: 'boat',
    category: 'sea',
    name: 'Boat Trips',
    emoji: '🛥️',
    // White speedboat leaving wake on crystal blue tropical ocean
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=80&fit=crop',
    color: '#0D9488', colorB: '#064E6E',
    description: 'Explore hidden coves, beaches, and reefs accessible only by boat around Aruba.',
    duration: '2–4 hours', schedule: 'Daily', maxGuests: 15,
    highlights: ['Hidden beaches', 'Snorkel stops', 'Guided route', 'Beverages included'],
  },
  {
    id: 'deepfishing',
    category: 'sea',
    name: 'Deep Sea Fishing',
    emoji: '🎣',
    // Fishing rods on charter boat over deep blue ocean
    image: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=600&q=80&fit=crop',
    color: '#064E6E', colorB: '#021825',
    description: 'Target marlin, tuna, wahoo, and mahi-mahi on an exciting offshore fishing charter.',
    duration: '4–8 hours', schedule: 'Early morning', maxGuests: 8,
    highlights: ['Offshore fishing', 'All equipment', 'Expert captain', 'Keep your catch'],
  },
  {
    id: 'bottomfishing',
    category: 'sea',
    name: 'Bottom Fishing',
    emoji: '🐟',
    // Person fishing from boat on calm tropical water
    image: 'https://images.unsplash.com/photo-1516825295-f7cc8e4f5f7e?w=600&q=80&fit=crop',
    color: '#0A7EA4', colorB: '#064E6E',
    description: 'Inshore bottom fishing for snappers, groupers and more. Perfect for all skill levels.',
    duration: '3–4 hours', schedule: 'Morning', maxGuests: 10,
    highlights: ['Inshore fishing', 'Beginner friendly', 'Bait provided', 'Keep your catch'],
  },

  // ── BEACH SERVICES ──────────────────────────────────────────────────────────
  {
    id: 'chairs',
    category: 'beach',
    name: 'Beach Chair Rental',
    emoji: '🪑',
    // White beach loungers on perfect white sand with turquoise sea
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80&fit=crop',
    color: '#C89B3C', colorB: '#92660A',
    description: 'Premium padded beach loungers on Aruba\'s most beautiful white sand beaches.',
    duration: 'Full day', schedule: 'All day', maxGuests: null,
    highlights: ['Premium loungers', 'Beachfront position', 'Towels available', 'Flexible rental'],
  },
  {
    id: 'umbrella',
    category: 'beach',
    name: 'Umbrella Rental',
    emoji: '⛱️',
    // Colorful beach umbrellas on white sand tropical beach with blue water
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&fit=crop',
    color: '#F4623A', colorB: '#c94520',
    description: 'Large beach umbrellas for shade and comfort. Available solo or bundled with chairs.',
    duration: 'Full day', schedule: 'All day', maxGuests: null,
    highlights: ['UV protection', 'Large canopy', 'Bundle deals', 'Best beach spots'],
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah & Mike Johnson',
    origin: 'Miami, USA',
    rating: 5,
    activity: 'Catamaran Trip',
    text: 'Absolutely incredible experience! The sunset catamaran was the highlight of our entire trip to Aruba. The crew was amazing and the open bar made it even better.',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Carlos Mendez',
    origin: 'Bogotá, Colombia',
    rating: 5,
    activity: 'UTV Tour',
    text: 'The UTV tour took us to places we never would have found on our own. Arikok Park and the Natural Pools were breathtaking. Highly recommend!',
    avatar: 'CM',
  },
  {
    id: 3,
    name: 'Emma & Tom Davies',
    origin: 'London, UK',
    rating: 5,
    activity: 'Snorkeling Tour',
    text: 'The Antilla Shipwreck snorkeling was a once-in-a-lifetime experience. Our guide was knowledgeable and made sure everyone felt safe. Will be back!',
    avatar: 'ED',
  },
]

// ─── Capability Map ─────────────────────────────────────────────────────────────
export const CAPABILITY_MAP = {
  core: [
    {
      area: 'Booking & Reservations',
      icon: '📅',
      description: 'Online booking system replacing WhatsApp and manual processes',
      capabilities: ['Activity selection', 'Date & time picker', 'Guest management', 'Booking confirmation', 'Future: online payments'],
      status: 'in-progress',
    },
    {
      area: 'Activity Management',
      icon: '🏄',
      description: 'Digital catalog of all 20+ activities with descriptions and schedules',
      capabilities: ['Activity catalog', 'Category filtering', 'Schedule display', 'Pricing information', 'Photo gallery'],
      status: 'done',
    },
    {
      area: 'Customer Communication',
      icon: '💬',
      description: 'Multi-channel communication with guests',
      capabilities: ['WhatsApp integration', 'Email notifications', 'Contact form', 'Social media links', 'FAQ section'],
      status: 'done',
    },
  ],
  support: [
    {
      area: 'Digital Presence',
      icon: '🌐',
      description: 'Professional web platform replacing social media-only presence',
      capabilities: ['Responsive website', 'SEO optimization', 'Social media integration', 'Brand consistency'],
      status: 'done',
    },
    {
      area: 'Payments (Future)',
      icon: '💳',
      description: 'Online payment processing for bookings',
      capabilities: ['Stripe integration', 'PayPal support', 'Credit/debit cards', 'Secure checkout'],
      status: 'planned',
    },
    {
      area: 'Authentication',
      icon: '🔐',
      description: 'User login and account management',
      capabilities: ['Google OAuth', 'User profiles', 'Booking history', 'Saved preferences'],
      status: 'optional',
    },
  ],
}
