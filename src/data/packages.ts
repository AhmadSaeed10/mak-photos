/**
 * PACKAGES & PRICING
 *
 * IMPORTANT: prices below are indicative placeholders. Confirm or replace
 * every figure before going live. Set `price` to null to show
 * "Custom quote" instead of a number.
 */

export interface Package {
  name: string;
  price: number | null;
  unit: string;
  blurb: string;
  includes: string[];
  popular?: boolean;
}

export interface PackageGroup {
  id: string;
  label: string;
  serviceSlug: string;
  intro: string;
  packages: Package[];
}

export const currency = 'PKR';

export const packageGroups: PackageGroup[] = [
  {
    id: 'wedding',
    label: 'Weddings',
    serviceSlug: 'wedding',
    intro: 'Coverage for a single event or the whole celebration, from Mehndi to Walima.',
    packages: [
      {
        name: 'Essential',
        price: 75000,
        unit: 'per event',
        blurb: 'One event, beautifully covered.',
        includes: ['1 photographer', 'Up to 6 hours coverage', '400+ edited photos', 'Online gallery', 'Sneak peek in 48 hours'],
      },
      {
        name: 'Signature',
        price: 220000,
        unit: '3 events',
        blurb: 'Our most booked package for full weddings.',
        includes: [
          'Photographer and cinematographer',
          'Mehndi, Barat and Walima',
          '1,200+ edited photos',
          '4 to 6 minute highlight film',
          'Vertical reels for social',
          'Premium album (30 pages)',
        ],
        popular: true,
      },
      {
        name: 'Luxe',
        price: 400000,
        unit: 'up to 5 events',
        blurb: 'Full team, every ritual, cinematic storytelling.',
        includes: [
          'Lead and second photographer',
          'Two cinematographers and drone',
          'Pre-wedding shoot included',
          'Feature film and highlight film',
          'Same-day highlight reel',
          'Two premium albums',
        ],
      },
    ],
  },
  {
    id: 'portrait',
    label: 'Portraits',
    serviceSlug: 'portrait',
    intro: 'Headshots, personal branding and creative portrait sessions in studio or on location.',
    packages: [
      {
        name: 'Headshot',
        price: 15000,
        unit: 'per session',
        blurb: 'Quick, polished and professional.',
        includes: ['45 minute session', '1 look', '5 retouched images', 'Delivery in 5 working days'],
      },
      {
        name: 'Personal Brand',
        price: 35000,
        unit: 'per session',
        blurb: 'A full image library for your brand.',
        includes: ['2 hour session', 'Up to 3 looks', '20 retouched images', '1 location plus studio', 'Social media crops'],
        popular: true,
      },
      {
        name: 'Creative',
        price: null,
        unit: 'custom',
        blurb: 'Concept-led portraits and family sessions.',
        includes: ['Concept and mood board', 'Heritage or custom location', 'Styling coordination', 'Fine-art retouching'],
      },
    ],
  },
  {
    id: 'commercial',
    label: 'Fashion & Events',
    serviceSlug: 'fashion',
    intro: 'Day rates for brands, designers and event organisers. Final quotes depend on scope and usage.',
    packages: [
      {
        name: 'Half Day',
        price: 45000,
        unit: 'up to 4 hours',
        blurb: 'Launches, lookbooks and short events.',
        includes: ['1 photographer', 'Basic lighting kit', '60+ edited images', 'Commercial usage license'],
      },
      {
        name: 'Full Day',
        price: 80000,
        unit: 'up to 9 hours',
        blurb: 'Campaigns, catalogs and full events.',
        includes: ['Photographer and assistant', 'Studio or location lighting', '150+ edited images', 'Creative direction', 'Commercial usage license'],
        popular: true,
      },
      {
        name: 'Production',
        price: null,
        unit: 'custom',
        blurb: 'Multi-day shoots with photo and video.',
        includes: ['Full crew and casting', 'Photo and video coverage', 'Live social delivery', 'Location permits support'],
      },
    ],
  },
];

export const addOns = [
  { name: 'Drone coverage', price: 20000 },
  { name: 'Second photographer', price: 25000 },
  { name: 'Additional event (wedding)', price: 60000 },
  { name: 'Same-day highlight reel', price: 30000 },
  { name: 'Extra album (30 pages)', price: 35000 },
  { name: 'Travel outside Lahore', price: null },
];

export const pricingFaqs = [
  {
    q: 'How do I secure a date?',
    a: 'A 30% advance confirms your booking. The balance is due on the event day, or before final delivery for commercial work.',
  },
  {
    q: 'Can packages be customised?',
    a: 'Yes. Packages are a starting point. Message us with your plans and we will tailor coverage, team size and deliverables.',
  },
  {
    q: 'What happens if our event date changes?',
    a: 'We move your booking to the new date at no cost, subject to availability. The advance stays valid for 12 months.',
  },
  {
    q: 'Are prices inclusive of travel?',
    a: 'Prices cover Lahore. Travel and accommodation for events in other cities are quoted separately.',
  },
];

export function formatPrice(price: number | null) {
  return price === null ? 'Custom quote' : `${currency} ${price.toLocaleString('en-US')}`;
}
