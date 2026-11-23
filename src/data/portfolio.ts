import type { Category } from './services';

/**
 * PORTFOLIO CONTENT
 *
 * Photos come from Instagram (@_makphotos). For each project, paste the
 * links of its Instagram posts or reels into `instagram`, e.g.
 *   instagram: ['https://www.instagram.com/p/ABC123xyz/'],
 *
 * - When `instagram` has links, the project page shows those posts as embeds.
 * - When it is empty, the page falls back to the placeholder `gallery` images.
 * - `cover` is the grid thumbnail. Embeds cannot be used as thumbnails, so
 *   swap it for a real image (e.g. /images/portfolio/naina-cover.jpg in
 *   public/) when you have one.
 */

export interface Project {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  story: string;
  location: string;
  coverage: string;
  cover: string;
  gallery: string[];
  instagram: string[];
  featured?: boolean;
}

const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: 'naina-barat',
    title: "Naina's Barat Ceremony",
    category: 'wedding',
    summary: 'Full wedding coverage',
    story:
      'A grand Barat celebrated with family from across the country. Coverage focused on the emotional arrival, the rukhsati and the quiet in-between moments the couple wanted to remember most.',
    location: 'Lahore',
    coverage: 'Photography and film',
    cover: u('1519741497674-611481863552', 800),
    gallery: [u('1519741497674-611481863552'), u('1583939003579-730e3918a45a'), u('1511285560929-80b456fea0bc'), u('1537633552985-df8429e8048b')],
    instagram: [],
    featured: true,
  },
  {
    slug: 'editorial-fashion',
    title: 'Editorial Fashion Shoot',
    category: 'fashion',
    summary: 'High-end fashion photography',
    story:
      'An editorial series built around texture, movement and bold color, styled and lit to work across print and social.',
    location: 'Lahore',
    coverage: 'Editorial photography',
    cover: u('1469334031218-e382a71b716b', 800),
    gallery: [u('1469334031218-e382a71b716b'), u('1515886657613-9f3515b0c78f'), u('1529636798458-92182e662485')],
    instagram: [],
    featured: true,
  },
  {
    slug: 'bunny-sahar-wedding',
    title: 'Bunny & Sahar Wedding',
    category: 'wedding',
    summary: 'Mehndi to Walima coverage',
    story:
      'Three days, three moods. From a color-drenched Mehndi to an elegant Walima, we documented the full celebration with a combined photo and film team.',
    location: 'Lahore',
    coverage: 'Multi-day photography and film',
    cover: u('1583939003579-730e3918a45a', 800),
    gallery: [u('1583939003579-730e3918a45a'), u('1519741497674-611481863552'), u('1511285560929-80b456fea0bc')],
    instagram: [],
    featured: true,
  },
  {
    slug: 'lahore-fort',
    title: 'Lahore Fort at Dusk',
    category: 'heritage',
    summary: 'Heritage documentation',
    story:
      'Part of ongoing documentation work for the Walled City of Lahore Authority, capturing the fort as the light shifts from gold to blue.',
    location: 'Lahore Fort',
    coverage: 'Architectural photography',
    cover: u('1587474260584-136574528ed5', 800),
    gallery: [u('1587474260584-136574528ed5'), u('1570168007204-dfb528c6958f'), u('1548013146-72479768bada')],
    instagram: [],
    featured: true,
  },
  {
    slug: 'creative-portraits',
    title: 'Creative Portrait Series',
    category: 'portrait',
    summary: 'Studio portrait session',
    story: 'A studio series exploring dramatic light and shadow, designed for a personal brand relaunch.',
    location: 'Studio, Lahore',
    coverage: 'Portrait photography',
    cover: u('1534528741775-53994a69daeb', 800),
    gallery: [u('1534528741775-53994a69daeb'), u('1522075469751-3a6694fb2f61'), u('1507003211169-0a1dd7228f2d')],
    instagram: [],
    featured: true,
  },
  {
    slug: 'grand-celebration',
    title: 'Grand Celebration Coverage',
    category: 'event',
    summary: 'Full event documentation',
    story: 'An evening celebration covered end to end, from setup and arrivals to speeches and the dance floor.',
    location: 'Lahore',
    coverage: 'Event photography',
    cover: u('1511285560929-80b456fea0bc', 800),
    gallery: [u('1511285560929-80b456fea0bc'), u('1540575467063-178a50c2df87'), u('1505373877841-8d25f7d46678')],
    instagram: [],
    featured: true,
  },
  {
    slug: 'shalamar-bagh',
    title: 'Shalamar Bagh Gardens',
    category: 'heritage',
    summary: 'Mughal heritage series',
    story: 'A study of symmetry, water and stone across the terraces of the Mughal-era garden complex.',
    location: 'Shalamar Bagh',
    coverage: 'Heritage photography',
    cover: u('1570168007204-dfb528c6958f', 800),
    gallery: [u('1570168007204-dfb528c6958f'), u('1587474260584-136574528ed5')],
    instagram: [],
  },
  {
    slug: 'mehak-ghilman',
    title: 'Mehak & Ghilman',
    category: 'wedding',
    summary: 'Intimate ceremony coverage',
    story: 'A small, close-knit Nikkah where the details and the family moments carried the story.',
    location: 'Lahore',
    coverage: 'Wedding photography',
    cover: u('1537633552985-df8429e8048b', 800),
    gallery: [u('1537633552985-df8429e8048b'), u('1583939003579-730e3918a45a')],
    instagram: [],
  },
  {
    slug: 'street-style',
    title: 'Street Style Editorial',
    category: 'fashion',
    summary: 'Urban fashion photography',
    story: 'An on-location editorial set in the lanes of the old city, mixing contemporary styling with historic backdrops.',
    location: 'Walled City, Lahore',
    coverage: 'Editorial photography',
    cover: u('1515886657613-9f3515b0c78f', 800),
    gallery: [u('1515886657613-9f3515b0c78f'), u('1469334031218-e382a71b716b')],
    instagram: [],
  },
  {
    slug: 'walled-city-streets',
    title: 'Walled City Streets',
    category: 'heritage',
    summary: 'Living heritage of Lahore',
    story: 'Everyday life inside the Walled City: the bazaars, craftsmen and gateways that keep its history alive.',
    location: 'Walled City, Lahore',
    coverage: 'Documentary photography',
    cover: u('1548013146-72479768bada', 800),
    gallery: [u('1548013146-72479768bada'), u('1587474260584-136574528ed5')],
    instagram: [],
  },
  {
    slug: 'cinematic-wedding-film',
    title: 'Cinematic Wedding Film',
    category: 'video',
    summary: 'Wedding highlight reel',
    story: 'A highlight film cut to music, weaving vows, speeches and candid moments into a few emotional minutes.',
    location: 'Lahore',
    coverage: 'Wedding videography',
    cover: u('1492691527719-9d1e07e534b4', 800),
    gallery: [u('1492691527719-9d1e07e534b4')],
    instagram: [],
  },
  {
    slug: 'ali-zafar-live',
    title: 'Ali Zafar Live Concert',
    category: 'event',
    summary: 'Celebrity event coverage',
    story: 'Live performance coverage working alongside production and media teams to capture the energy on and off stage.',
    location: 'Lahore',
    coverage: 'Concert photography',
    cover: u('1460978812857-470ed1c77af0', 800),
    gallery: [u('1460978812857-470ed1c77af0'), u('1540575467063-178a50c2df87')],
    instagram: [],
  },
  {
    slug: 'gul-e-hina-walima',
    title: "Gul E Hina's Walima",
    category: 'wedding',
    summary: 'Grand reception photography',
    story: 'An elegant Walima reception with formal family portraits and relaxed candid coverage of the guests.',
    location: 'Lahore',
    coverage: 'Wedding photography',
    cover: u('1519741497674-611481863552', 800),
    gallery: [u('1519741497674-611481863552'), u('1537633552985-df8429e8048b')],
    instagram: [],
  },
  {
    slug: 'bridal-couture',
    title: 'Bridal Couture Week',
    category: 'fashion',
    summary: 'Fashion week coverage',
    story: 'Runway and backstage coverage of bridal couture, delivered quickly for press and social.',
    location: 'Lahore',
    coverage: 'Runway and backstage',
    cover: u('1529636798458-92182e662485', 800),
    gallery: [u('1529636798458-92182e662485'), u('1469334031218-e382a71b716b')],
    instagram: [],
  },
  {
    slug: 'brand-film',
    title: 'Brand Promotional Film',
    category: 'video',
    summary: 'Commercial videography',
    story: 'A short promotional film produced for social and web, shot over a single day with vertical cuts planned in.',
    location: 'Lahore',
    coverage: 'Commercial video',
    cover: u('1505373877841-8d25f7d46678', 800),
    gallery: [u('1505373877841-8d25f7d46678')],
    instagram: [],
  },
];

export function projectsByCategory(cat: Category) {
  return projects.filter((p) => p.category === cat);
}
