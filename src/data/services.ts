export type Category = 'wedding' | 'fashion' | 'event' | 'portrait' | 'heritage' | 'video';

export interface Service {
  slug: string;
  num: string;
  category: Category;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  desc: string;
  intro: string[];
  features: string[];
  deliverables: { label: string; value: string }[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
  img: string;
  hero: string;
  icon: string;
}

const icon = (d: string) =>
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="${d}"/></svg>`;

export const services: Service[] = [
  {
    slug: 'wedding',
    num: '01',
    category: 'wedding',
    title: 'Wedding Photography & Videography',
    shortTitle: 'Wedding Photography',
    tagline: 'Your Love Story, Beautifully Told',
    summary:
      'From the intimate Mehndi to the grand Barat and Walima, every emotion, every detail, every unforgettable moment of your day.',
    desc: 'Your wedding day deserves to be remembered in all its glory. From the vibrant colors of the Mehndi to the emotional moments of the Nikkah, the grand entrance of the Barat, and the elegant Walima, we capture every chapter of your love story with artistry and emotion.',
    intro: [
      'A Pakistani wedding is not one day. It is a season of rituals, families and emotions, and each event has its own light, pace and mood. We plan coverage around that rhythm so nothing important is left to chance.',
      'Our approach blends quiet, candid storytelling with directed portraits. We stay out of the way during rituals, then take a few focused minutes with the couple and family for the frames you will hang on your walls.',
    ],
    features: [
      'Full coverage from Mehndi to Walima',
      'Cinematic wedding films',
      'Candid and posed photography',
      'Drone aerial coverage',
      'Same-day highlight reels',
      'Premium album design',
      'Engagement and pre-wedding shoots',
      'Second shooter available',
    ],
    deliverables: [
      { label: 'Edited photos', value: '400 to 1,200 per event' },
      { label: 'Sneak peek', value: 'Within 48 hours' },
      { label: 'Full gallery', value: '3 to 5 weeks' },
      { label: 'Film', value: '4 to 8 week edit' },
    ],
    idealFor: ['Couples planning multi-day weddings', 'Destination and heritage-venue weddings', 'Intimate Nikkah ceremonies'],
    faqs: [
      {
        q: 'How far in advance should we book?',
        a: 'Wedding season (October to March) fills quickly, so we recommend booking 3 to 6 months ahead. Off-season dates can often be secured with a few weeks notice.',
      },
      {
        q: 'Do you travel outside Lahore?',
        a: 'Yes. We cover weddings across Pakistan. Travel and accommodation outside Lahore are quoted separately.',
      },
      {
        q: 'Can we book photography and videography together?',
        a: 'Yes, and it is the most popular option. A combined team plans shots together, so the film and the photos tell one consistent story.',
      },
      {
        q: 'How do we receive our photos?',
        a: 'You receive a private online gallery for downloading and sharing, plus an optional printed album designed in-house.',
      },
    ],
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    icon: icon('M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'),
  },
  {
    slug: 'fashion',
    num: '02',
    category: 'fashion',
    title: 'Fashion & Editorial Photography',
    shortTitle: 'Fashion Photography',
    tagline: 'Where Style Meets Vision',
    summary:
      'High-end fashion shoots that bring out the personality of every outfit and model. Editorial, catalog and lookbook work tailored to your brand.',
    desc: "High-impact fashion photography that elevates your brand. Whether it's a full editorial spread, a seasonal lookbook, or social media content, we bring creative direction, expert lighting, and post-production excellence to every shoot.",
    intro: [
      'Good fashion imagery sells a feeling before it sells a garment. We start every shoot with a mood board and shot list built around your collection, your customer and the channels the images will live on.',
      'From studio catalog days to on-location editorials in the Walled City, we handle lighting, direction and retouching so your team can focus on styling.',
    ],
    features: [
      'Editorial and magazine shoots',
      'Lookbook and catalog photography',
      'E-commerce product photography',
      'Model portfolio shoots',
      'Brand campaign imagery',
      'Social media content creation',
      'Creative direction included',
      'Professional retouching',
    ],
    deliverables: [
      { label: 'Retouched images', value: 'Per look, agreed upfront' },
      { label: 'Formats', value: 'Web, print and social crops' },
      { label: 'Turnaround', value: '5 to 10 working days' },
      { label: 'Usage', value: 'Commercial license included' },
    ],
    idealFor: ['Clothing and bridal couture brands', 'Designers launching a collection', 'Models building a portfolio'],
    faqs: [
      {
        q: 'Do you provide models, hair and makeup?',
        a: 'We can coordinate a full team through our network of trusted models, stylists and makeup artists, or work with your own.',
      },
      {
        q: 'Can you shoot on location?',
        a: 'Yes. Heritage locations around the Walled City are a signature backdrop. Some sites require permits, which we help arrange.',
      },
      {
        q: 'How many outfits can we shoot in a day?',
        a: 'Typically 15 to 25 looks for catalog work and 6 to 10 for editorial, depending on changes and locations.',
      },
    ],
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80',
    icon: icon('M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'),
  },
  {
    slug: 'events',
    num: '03',
    category: 'event',
    title: 'Event Coverage',
    shortTitle: 'Event Coverage',
    tagline: 'Every Moment Matters',
    summary:
      'Corporate events, concerts, celebrations and cultural gatherings, documented comprehensively so no moment goes uncaptured.',
    desc: 'Comprehensive event photography and videography that captures the energy, emotion, and atmosphere of your occasion. From corporate conferences and product launches to concerts and cultural celebrations, we ensure nothing goes undocumented.',
    intro: [
      'Events move fast and only happen once. We arrive with a run-of-show, a shot list agreed with your team and backup equipment, so the key moments are covered even when the schedule shifts.',
      'Need images during the event? We can deliver edited selects in near real time for your social channels and press.',
    ],
    features: [
      'Corporate events and conferences',
      'Product launches',
      'Concerts and live performances',
      'Cultural and community events',
      'Award ceremonies',
      'Real-time social media delivery',
      'Multi-camera video coverage',
      'Quick turnaround editing',
    ],
    deliverables: [
      { label: 'Live selects', value: 'During the event (optional)' },
      { label: 'Full gallery', value: '3 to 7 working days' },
      { label: 'Highlight video', value: '1 to 3 minutes' },
      { label: 'Coverage', value: 'Hourly or full day' },
    ],
    idealFor: ['Brands and agencies', 'Concert and festival organisers', 'Cultural institutions'],
    faqs: [
      {
        q: 'Can you deliver photos the same day?',
        a: 'Yes. With live delivery, an editor works alongside the photographer and sends selects throughout the event.',
      },
      {
        q: 'Do you cover celebrity and press events?',
        a: 'Yes. We have covered high-profile events, including work with artist Ali Zafar, and are comfortable working alongside media and security teams.',
      },
    ],
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    icon: icon('M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z'),
  },
  {
    slug: 'portrait',
    num: '04',
    category: 'portrait',
    title: 'Portrait Photography',
    shortTitle: 'Portrait Sessions',
    tagline: 'Reveal Your True Self',
    summary:
      'Professional headshots, personal branding and creative portrait sessions that reveal the authentic you. Studio and outdoor options.',
    desc: 'Whether you need professional headshots for your LinkedIn, a personal branding session, or a creative portrait shoot, we create images that reveal personality, confidence, and authenticity. Studio and outdoor options available throughout Lahore.',
    intro: [
      'Most people say they are not photogenic. In our experience they have just never been directed well. We guide posture, expression and light so you look like yourself on a good day.',
      'Sessions are relaxed and paced around you, with real-time previews so you can see the results as we go.',
    ],
    features: [
      'Professional headshots',
      'Personal branding sessions',
      'Creative portrait photography',
      'Family portrait sessions',
      'Graduation photography',
      'Studio and on-location options',
      'Hair and makeup referrals',
      'Digital and print delivery',
    ],
    deliverables: [
      { label: 'Session length', value: '1 to 3 hours' },
      { label: 'Retouched images', value: '10 to 40' },
      { label: 'Turnaround', value: '5 working days' },
      { label: 'Outfit changes', value: 'Up to 3' },
    ],
    idealFor: ['Professionals and founders', 'Artists and creators', 'Families and graduates'],
    faqs: [
      {
        q: 'What should I wear?',
        a: 'Solid colors and well-fitted clothing photograph best. We send a short style guide after booking.',
      },
      {
        q: 'Can we shoot at a heritage location?',
        a: 'Yes. Locations such as the Walled City make striking backdrops. Some sites need permits, which we help arrange.',
      },
    ],
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=80',
    icon: icon('M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'),
  },
  {
    slug: 'heritage',
    num: '05',
    category: 'heritage',
    title: 'Heritage & Architectural Photography',
    shortTitle: 'Heritage Documentation',
    tagline: 'Preserving History Through the Lens',
    summary:
      'Architectural and cultural heritage photography by the photographer at the Walled City of Lahore Authority.',
    desc: 'As the official photographer at the Walled City of Lahore Authority, Moazzam brings a unique expertise in heritage documentation. From UNESCO World Heritage sites to contemporary architecture, we create visual records that honor the past and inspire the future.',
    intro: [
      'Documenting heritage is part craft, part responsibility. Images become records used for conservation, research and tourism, so accuracy matters as much as beauty.',
      'Years of work at sites like the Lahore Fort and Shalamar Bagh mean we know how these spaces behave in different light and seasons, and how to work respectfully within them.',
    ],
    features: [
      'Heritage site documentation',
      'Architectural photography',
      'Interior design photography',
      'Real estate photography',
      'Cultural preservation projects',
      'High-resolution archival quality',
      'Aerial and drone perspectives',
      'Exhibition-ready prints',
    ],
    deliverables: [
      { label: 'Resolution', value: 'Full-resolution archival files' },
      { label: 'Formats', value: 'TIFF, JPEG and web sets' },
      { label: 'Turnaround', value: '1 to 3 weeks' },
      { label: 'Prints', value: 'Exhibition-grade on request' },
    ],
    idealFor: ['Conservation bodies and NGOs', 'Architects and interior designers', 'Hotels, publishers and tourism boards'],
    faqs: [
      {
        q: 'Can you arrange access to protected sites?',
        a: 'We can guide you through the permit process. Access is granted by the relevant authority and depends on the site and purpose.',
      },
      {
        q: 'Do you offer drone photography?',
        a: 'Yes, where flying is permitted. Many heritage sites restrict drones, so we confirm permissions before the shoot.',
      },
    ],
    img: '/images/badshahi-masjid-800.webp',
    hero: '/images/lahore-fort-1920.webp',
    icon: icon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'),
  },
  {
    slug: 'videography',
    num: '06',
    category: 'video',
    title: 'Cinematic Videography',
    shortTitle: 'Cinematic Videos',
    tagline: 'Stories in Motion',
    summary:
      'Cinematic wedding films, promotional videos and event highlights that tell your story with drama and emotion.',
    desc: 'Beyond still photography, MAK Photos produces cinematic video content that brings your story to life with movement, music, and emotion. Our films are crafted with the same artistic vision and attention to detail as our photography.',
    intro: [
      'A film captures what a photograph cannot: voices, music, movement and the pace of a moment. We script loosely, shoot generously and edit with intention.',
      'Every project is color graded in-house and delivered in formats ready for social, web and big-screen playback.',
    ],
    features: [
      'Wedding highlight films',
      'Full ceremony documentation',
      'Corporate video production',
      'Brand promotional videos',
      'Social media video content',
      'Cinematic color grading',
      'Professional audio recording',
      '4K resolution output',
    ],
    deliverables: [
      { label: 'Highlight film', value: '3 to 6 minutes' },
      { label: 'Social cuts', value: 'Vertical reels included' },
      { label: 'Resolution', value: 'Up to 4K' },
      { label: 'Revisions', value: '2 rounds' },
    ],
    idealFor: ['Weddings and family celebrations', 'Brands and product launches', 'Cultural and tourism stories'],
    faqs: [
      {
        q: 'Can we choose the music?',
        a: 'Yes. We suggest licensed tracks that fit the mood, or work with your choice where licensing allows.',
      },
      {
        q: 'Do you deliver vertical videos for Instagram and TikTok?',
        a: 'Yes. Vertical edits are planned during the shoot, not just cropped afterwards, so they look intentional.',
      },
    ],
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    hero: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80',
    icon: icon('M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'),
  },
];

export const categoryLabels: Record<Category, string> = {
  wedding: 'Wedding',
  fashion: 'Fashion',
  event: 'Event',
  portrait: 'Portrait',
  heritage: 'Heritage',
  video: 'Video',
};

export function serviceForCategory(cat: Category) {
  return services.find((s) => s.category === cat);
}
