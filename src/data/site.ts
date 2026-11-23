// Single source of truth for brand and contact details.
// Update the WhatsApp number here and it changes across the whole site.

export const site = {
  name: 'MAK Photos',
  owner: 'Moazzam Ali Khokhar',
  city: 'Lahore, Pakistan',

  // TODO: replace with the real WhatsApp number (international format, digits only).
  whatsappNumber: '923001234567',
  whatsappDisplay: '+92 300 123 4567',

  instagramHandle: '_makphotos',
  instagramUrl: 'https://www.instagram.com/_makphotos/',
  personalInstagramUrl: 'https://www.instagram.com/i.moazzam.ali/',

  facebookPage: 'moazzamaliphotography',
  facebookUrl: 'https://www.facebook.com/moazzamaliphotography',

  mapQuery: 'Lahore, Pakistan',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

/** WhatsApp chat link, optionally with a prefilled message. */
export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Instagram DM link. Instagram does not support prefilled text. */
export const instagramDmLink = `https://ig.me/m/${site.instagramHandle}`;

/** Facebook Messenger link, optionally with a prefilled message. */
export function messengerLink(text?: string) {
  const base = `https://m.me/${site.facebookPage}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
