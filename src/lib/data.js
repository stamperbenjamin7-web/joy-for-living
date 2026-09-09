// ─── Company Info ─────────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Joy For Living',
  tagline: 'Watersports & Activities',
  location: 'Palm Beach, Aruba — C Tower, Holiday Inn Aruba',
  whatsapp: '2976610531',
  whatsappDisplay: '+297 661 0531',
  email: 'joyforlivingwatersports@gmail.com',
  instagram: 'https://instagram.com/joyforlivingaruba',
  facebook: 'https://facebook.com/joyforlivingaruba',
}

function waLink(message) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`
}

export { waLink }

// ─── Beach Chair & Umbrella Delivery ───────────────────────────────────────────
// This is the flagship offer: we deliver (and optionally set up) beach chairs
// and umbrellas directly to the guest's hotel spot or beach location.
export const BEACH_RENTAL = {
  id: 'beach-rental',
  name: 'Beach Chair & Umbrella Delivery',
  emoji: '🏖️',
  image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80&fit=crop',
  description:
    'Skip the setup — we bring a small umbrella and two comfy loungers straight to your spot on the beach or in front of your hotel. Reserve online and pay only a small deposit now.',
  setPrice: 25,
  setupFee: 10,
  depositAmount: 10,
  includes: ['1 small beach umbrella', '2 beach chairs / loungers', 'Delivery to your location'],
  setupIncludes: ['We set up the umbrella & chairs exactly where you want them', 'Delivery included'],
  highlights: [
    'Delivered to your hotel or beach spot',
    'Small umbrella + 2 chairs = $25',
    'Optional white-glove setup for +$10',
    'Only $10 deposit to reserve — pay the rest on delivery',
  ],
}

export const CATEGORIES = [
  { id: 'all',     label: 'All Experiences' },
  { id: 'sailing', label: 'Sailing & Snorkeling' },
  { id: 'water',   label: 'Watersports' },
  { id: 'fishing', label: 'Fishing' },
  { id: 'tours',   label: 'Land Tours' },
]

// ─── Sailing & Snorkeling Boats ────────────────────────────────────────────────
// $70 per adult · $50 per child (under 10) on every boat listed on our gazebo sign.
export const BOATS = [
  {
    id: 'dolphin',
    category: 'sailing',
    name: 'Dolphin',
    emoji: '⛵',
    image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80&fit=crop',
    description: 'A relaxed sailing & snorkeling trip along Aruba\'s calm turquoise coastline.',
    priceAdult: 70, priceChild: 50, priceLabel: '$70 adult · $50 child',
    duration: '~3 hours',
    highlights: ['Snorkel stop', 'Shaded deck', 'Rope swing'],
  },
  {
    id: 'sunshine',
    category: 'sailing',
    name: 'Sunshine',
    emoji: '☀️',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80&fit=crop',
    description: 'Sail into the sun aboard the Sunshine, with plenty of room to swim and relax.',
    priceAdult: 70, priceChild: 50, priceLabel: '$70 adult · $50 child',
    duration: '~3 hours',
    highlights: ['Snorkel gear included', 'Water slide', 'Onboard music'],
  },
  {
    id: 'locura',
    category: 'sailing',
    name: 'Locura',
    emoji: '⛵',
    // Aerial catamaran shot — swap for a real photo of the Locura at public/images/activities/locura.jpg
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80&fit=crop',
    description: 'The Locura catamaran — a high-energy sail with a giant water slide and swings.',
    priceAdult: 70, priceChild: 50, priceLabel: '$70 adult · $50 child',
    duration: '~3 hours',
    highlights: ['Giant water slide', 'Snorkel stop', 'Great for groups'],
  },
  {
    id: 'jolly-pirates',
    category: 'sailing',
    name: 'Jolly Pirates',
    emoji: '🏴‍☠️',
    // Pirate-ship style sailing photo — swap for a real photo at public/images/activities/jolly-pirates.jpg
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80&fit=crop',
    description: 'Board the Jolly Pirates ship for a fun-filled snorkel sail with rope swings and slides.',
    duration: '~3 hours',
    highlights: ['Pirate-ship experience', 'Rope swing & slide', 'Snorkel stop'],
  },
]

// ─── Watersports ────────────────────────────────────────────────────────────────
export const WATERSPORTS = [
  {
    id: 'tube',
    category: 'water',
    name: 'Tube Rides',
    emoji: '🛟',
    image: 'https://images.unsplash.com/photo-1561463978-049f20d4ede3?w=800&q=80&fit=crop',
    description: 'Hold on tight for a bumpy, splashy ride across the waves on an inflatable tube.',
    priceLabel: '$30 per person',
    duration: '~20 min',
  },
  {
    id: 'parasailing',
    category: 'water',
    name: 'Parasailing',
    emoji: '🪂',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80&fit=crop',
    description: 'Soar high above the Caribbean and take in panoramic views of Palm Beach.',
    priceLabel: '$70 per person',
    duration: '~1 hour',
  },
  {
    id: 'jetski',
    category: 'water',
    name: 'Jet Skis / Waverunners',
    emoji: '🚤',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80&fit=crop',
    description: 'Race across crystal-clear water on a single or double waverunner.',
    priceLabel: '$70 single · $80 double',
    duration: '~30 min',
  },
  {
    id: 'kayak',
    category: 'water',
    name: 'Kayaks',
    emoji: '🛶',
    image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=800&q=80&fit=crop',
    description: 'Explore the coastline at your own pace in a single or double kayak.',
    priceLabel: '$35 per hour',
    duration: '1 hour',
  },
  {
    id: 'paddleboard',
    category: 'water',
    name: 'Paddle Board',
    emoji: '🏄',
    image: 'https://images.unsplash.com/photo-1531722569936-825d4eea2573?w=800&q=80&fit=crop',
    description: 'Glide across Palm Beach\'s calm, clear waters — great for beginners.',
    priceLabel: '$25 per hour',
    duration: '1 hour',
  },
]

// ─── Fishing ─────────────────────────────────────────────────────────────────────
export const FISHING = [
  {
    id: 'bottom-fishing',
    category: 'fishing',
    name: 'Bottom Fishing',
    emoji: '🐟',
    image: 'https://images.unsplash.com/photo-1516825295-f7cc8e4f5f7e?w=800&q=80&fit=crop',
    description: 'Inshore fishing for snappers, groupers and more — great for all skill levels.',
    priceLabel: 'Ask us for pricing',
    duration: '3–4 hours',
  },
  {
    id: 'deep-sea-fishing',
    category: 'fishing',
    name: 'Deep Sea Fishing',
    emoji: '🎣',
    image: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=800&q=80&fit=crop',
    description: 'Target marlin, tuna, wahoo and mahi-mahi on an offshore fishing charter.',
    priceLabel: 'Ask us for pricing',
    duration: '4–8 hours',
  },
]

// ─── Land Tours ──────────────────────────────────────────────────────────────────
export const LAND_TOURS = [
  {
    id: 'jeep-tours',
    category: 'tours',
    name: 'Jeep Tours',
    emoji: '🚙',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80&fit=crop',
    description: 'Island-wide 4x4 exploration — natural pools, Arikok Park and hidden gems.',
    priceLabel: 'Ask us for pricing',
    duration: 'Half / Full day',
  },
  {
    id: 'utv-tours',
    category: 'tours',
    name: 'UTV Tours',
    emoji: '🏍️',
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=800&q=80&fit=crop',
    description: 'Conquer Aruba\'s rugged off-road trails in a side-by-side UTV.',
    priceLabel: 'Ask us for pricing',
    duration: '3–4 hours',
  },
]

// All bookable activities in one flat list (used by booking form + search)
export const ACTIVITIES = [...BOATS, ...WATERSPORTS, ...FISHING, ...LAND_TOURS]

// ─── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah & Mike Johnson',
    origin: 'Miami, USA',
    rating: 5,
    activity: 'Beach Chair Delivery',
    text: 'They set up our umbrella and chairs right on the beach before we even got there. So easy — just paid a small deposit online and the rest on delivery.',
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
    activity: 'Jolly Pirates',
    text: 'The Jolly Pirates snorkel sail was a highlight of our trip — rope swings, a water slide and a great crew. Booking through WhatsApp was super fast too.',
    avatar: 'ED',
  },
]
