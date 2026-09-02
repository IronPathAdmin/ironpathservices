export const contact = {
  phone: '(509) 883-7231',
  phoneHref: 'tel:15098837231',
  whatsapp: 'https://wa.me/15098837231',
  leadsEmail: 'leads@ironpathservices.com',
  supportEmail: 'leads@ironpathservices.com',
  adminEmail: 'leads@ironpathservices.com',
  instagram: 'https://www.instagram.com/ironpathservices',
  instagramLabel: 'Instagram: @ironpathservices',
  facebook: 'https://www.facebook.com/share/1AdC4PEsEi/',
  facebookLabel: 'Facebook: Iron Path Services',
};

export const serviceTagline =
  'Junk Removal, House Cleaning, Secure Paper Shredding, Firewood Services, Transit (coming soon).';

export const servicePromise =
  'Delivered by people who live here, work here, and care for the valley.';

export const communityPledge = {
  title: 'Community Donation Pledge',
  summary:
    '3% of Iron Path Services net profits is pledged back into the Methow Valley. 100% of funds donated to the valley fund goes to the valley.',
  points: [
    {
      label: '3% of net profits',
      text: 'Pledged back into the Methow Valley.',
    },
    {
      label: 'Valley fund',
      text: '100% of funds donated to the valley fund goes to the valley.',
    },
  ],
};

export const paymentPolicy =
  'Accepted methods include cash, check, bank transfer/ACH, debit, Venmo, CashApp, and credit card invoice. A 3% payment processing fee applies to Venmo, CashApp, and credit card invoices. It is never applied to cash, check, bank transfer/ACH, or debit cards. Invoice timing is agreed before work begins.';

export const paymentMethodGroups = [
  {
    label: 'No processing fee',
    methods: 'Cash, check, bank transfer/ACH, and debit',
  },
  {
    label: '3% processing fee',
    methods: 'Venmo, CashApp, and credit card invoices',
  },
];

export const invoiceOrderSteps = [
  'Subtotal',
  'Discounts applied',
  'Sales Tax',
  'Payment Processing Fee (if applicable)',
  'Total',
];

export const invoiceOrderNote = `Every invoice is calculated in this order: ${invoiceOrderSteps.join(' → ')}.`;

export const discountCapNote = 'Discounts can stack. Combined discount is capped at 30% maximum.';

export const pricingDownloads = [
  {
    title: 'General Pricing Guide',
    href: '/downloads/ironpath-general-pricing.pdf',
    description: 'Residential rates, add-ons, karaoke, fees, discounts, and taxes.',
  },
  {
    title: 'Commercial Pricing',
    href: '/downloads/ironpath-commercial-pricing.pdf',
    description: 'Business, office, and commercial-property rates and terms.',
  },
];

export const tallyForms = {
  paperShredding: {
    id: '0QqM0Q',
    url: 'https://tally.so/r/0QqM0Q',
    embedUrl: 'https://tally.so/embed/0QqM0Q',
    title: 'Secure Paper Shredding Intake',
    buttonLabel: 'Open Shredding Intake',
    finePrint: 'Opens the official Secure Paper Shredding Intake form. No Google login required.',
  },
  getAQuote: {
    id: 'aQpZRB',
    url: 'https://tally.so/r/aQpZRB',
    embedUrl: 'https://tally.so/embed/aQpZRB',
    title: 'Get A Quote!!',
    buttonLabel: 'Get A Quote',
    finePrint: 'Opens the official Get A Quote form. No Google login required.',
  },
} as const;

export const googleForms = {
  generalQuote: 'https://forms.gle/d1u58XK3wpbYDrcD6',
  firewoodOrder: 'https://forms.gle/WQLiw38JNapzAdTE6',
  vendingAtm: 'https://forms.gle/NkjWbquUTVtQyoUY9',
  volunteerProgram: 'https://forms.gle/eTywiDqx76tG19zw5',
  referralPartner: 'https://forms.gle/SZZtc3cAAzJrhW3j6',
  communityNeed: 'https://forms.gle/Njyob5HgRTThAn256',
  customerReview: 'https://forms.gle/V3KNfNb3soMkNpeDA',
  imageApproval: 'https://forms.gle/7abciXX1tcqRWqZi6',
  promotion: 'https://forms.gle/qnfBQw8S78fYFXPE9',
};

export const googleFormFinePrint =
  'May be required to log into google in order to fill out form due to ability to upload files. Thank you for your time and look forward to helping you!';

export const externalLinks = {
  googleReview: 'https://g.page/r/CZXFURd6BbjgEAE/review',
};

export type FormLink = {
  title: string;
  href: string;
  description: string;
  provider?: 'google' | 'tally';
  tallyKey?: keyof typeof tallyForms;
  ctaLabel?: string;
  finePrint?: string;
};

export const formLinks: FormLink[] = [
  {
    title: 'General Service Quote Request',
    href: tallyForms.getAQuote.url,
    description: 'Use this for House Cleaning, Junk Removal, multi-service jobs, and general estimates.',
    provider: 'tally' as const,
    tallyKey: 'getAQuote',
    ctaLabel: tallyForms.getAQuote.buttonLabel,
    finePrint: tallyForms.getAQuote.finePrint,
  },
  {
    title: 'Firewood Services',
    href: googleForms.firewoodOrder,
    description: 'Order Firewood Services: campfire bundles, individual bundles, cords, and recycled fire products.',
  },
  {
    title: 'Vending / ATM Placement Inquiry',
    href: googleForms.vendingAtm,
    description: 'Start a host-location conversation for vending machines or ATMs.',
  },
  {
    title: 'Secure Paper Shredding',
    href: tallyForms.paperShredding.url,
    description: 'Request Secure Paper Shredding and certificates of destruction.',
    provider: 'tally' as const,
    tallyKey: 'paperShredding',
    ctaLabel: tallyForms.paperShredding.buttonLabel,
    finePrint: tallyForms.paperShredding.finePrint,
  },
  {
    title: 'Volunteer Program Application',
    href: googleForms.volunteerProgram,
    description: 'Apply for the Iron Path Volunteer Program.',
  },
  {
    title: 'Referral Partner Application',
    href: googleForms.referralPartner,
    description: 'Apply to join the local referral ecosystem.',
  },
  {
    title: 'Methow Valley Community Need Submission',
    href: googleForms.communityNeed,
    description: 'Submit a community need for the investment strategy tracker.',
  },
  {
    title: 'Customer Review Submission',
    href: googleForms.customerReview,
    description: 'Submit a customer review for manual approval before publishing.',
  },
];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/products-services/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Karaoke', href: '/karaoke/' },
  { label: 'Initiatives', href: '/initiatives/' },
  { label: 'Stories', href: '/stories/' },
  { label: 'About', href: '/about/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Local', href: '/local-businesses/' },
  { label: 'B2B', href: '/work-with-us/' },
  { label: 'Tracker', href: '/investment-tracker/' },
];

export const serviceAreas = [
  'Mazama',
  'Winthrop',
  'Twisp',
  'Carlton',
  'Methow',
  'Pateros',
  'Brewster',
  'Monse',
  'Ophir',
  'Malott',
  'Chillowist',
  'Okanogan',
  'Omak',
];

export type Service = {
  title: string;
  treeTitle: string;
  slug: string;
  image: string;
  summary: string;
  description: string;
  bullets: string[];
  price?: string;
  tier: 'primary' | 'secondary';
  comingSoon?: boolean;
  galleryReady?: boolean;
  gallery?: Array<{ src: string; alt: string }>;
};

export const primaryServices: Service[] = [
  {
    title: 'House Cleaning',
    treeTitle: 'House Cleaning',
    slug: 'cleaning',
    tier: 'primary',
    image: '/assets/photos/jobs/house-cleaning.jpg',
    summary:
      'Move-out ready, estate clean outs, vacation rentals, Airbnb, commercial, and house cleaning.',
    description:
      'Professional cleaning for homes, rentals, estates, offices, and commercial spaces. We bring the supplies, document the work, and leave spaces ready for the next chapter.',
    bullets: [
      'Move-out and move-in ready cleaning',
      'Estate clean outs and property resets',
      'Vacation rental and Airbnb turnovers',
      'Commercial, office, and retail cleaning',
      'Deep house cleaning and recurring service',
    ],
    price: 'From $175',
  },
  {
    title: 'Junk Removal',
    treeTitle: 'Junk Removal',
    slug: 'junk-removal',
    tier: 'primary',
    image: '/assets/photos/jobs/junk-load-1.jpg',
    summary:
      'Estate cleanouts, donation sorting, refurbishing, commercial cleanouts, and residential cleanouts.',
    description:
      'Fast, respectful removal for homes and businesses. We sort for donation or resale where practical and disclose every fee before we start.',
    bullets: [
      'Furniture, appliances, electronics, and household items',
      'Garage, attic, basement, and estate cleanouts',
      'Donation sorting and second-life refurbishing',
      'Commercial and residential cleanouts',
      'Responsible disposal with clear limitations',
    ],
    price: 'From $85',
  },
  {
    title: 'Secure Paper Shredding',
    treeTitle: 'Secure Document Shredding',
    slug: 'document-shredding',
    tier: 'primary',
    image: '/assets/photos/shredding/archive-paper-stacks.jpg',
    galleryReady: false,
    gallery: [
      {
        src: '/assets/photos/shredding/paper-record-stacks.jpg',
        alt: 'Stacks of paper records prepared for Secure Paper Shredding',
      },
      {
        src: '/assets/photos/shredding/archive-paper-stacks.jpg',
        alt: 'Bundled archive paperwork before Secure Paper Shredding',
      },
      {
        src: '/assets/photos/shredding/colorful-shredded-paper.jpg',
        alt: 'Colorful shredded paper after Secure Paper Shredding',
      },
    ],
    summary:
      'On-site shredding, off-site shredding, security guarantee, and certificates of destruction.',
    description:
      'Secure Paper Shredding for residents and businesses, with a clear chain of custody and a certificate of destruction when requested.',
    bullets: [
      'On-site or off-site shredding options',
      'Security-first handling practices',
      'Certificate of destruction available',
      'Paper waste routed toward recycled fire starter production when safe',
    ],
    price: 'From $35',
  },
  {
    title: 'Firewood Services',
    treeTitle: 'Firewood Services',
    slug: 'firewood',
    tier: 'primary',
    image: '/assets/img-firewood.jpg',
    summary:
      'Blazers fire starters, recycled wood bundles, individual bundles, and campfire bundles.',
    description:
      'Seasonal firewood and recycled fire products built around reuse: safe burnable wood becomes discounted bundles, and paper waste becomes Blazers.',
    bullets: [
      'Campfire bundles and individual fire bundles',
      'Recycled wood bundles when available',
      'Blazers 100% recycled fire starter blocks',
      'Delivery and stacking options by location',
    ],
    price: 'From $5',
  },
  {
    title: 'Transit',
    treeTitle: 'Transit',
    slug: 'transit',
    tier: 'primary',
    comingSoon: true,
    image: '/assets/photos/team/eloise-truck.jpg',
    summary: 'Coming soon. Local transit from a team that already lives and works these roads.',
    description:
      'Iron Path Transit is on the way. We will share routes, booking, and details here when the service launches.',
    bullets: [
      'Coming soon to the Methow Valley',
      'Details will be posted when the service launches',
    ],
  },
];

export const secondaryServices: Service[] = [
  {
    title: 'Vending Machines & ATMs',
    treeTitle: 'Vending Machines & ATMs',
    slug: 'vending-atm',
    tier: 'secondary',
    image: '/assets/img-vending.jpg',
    summary:
      'Commercial vending machines, ATMs, 30% host revenue, and several machine options.',
    description:
      'Passive revenue options for local businesses. Iron Path supplies, installs, stocks, maintains, and services the machines.',
    bullets: [
      'Commercial vending machine placement',
      'Commercial ATM placement',
      '30% net revenue share to host locations',
      'ATM withdrawal fees disclosed before placement; Event ATM coming soon',
      'Machine options matched to your location',
    ],
    price: 'No upfront host cost',
  },
];

export const services: Service[] = [...primaryServices, ...secondaryServices];

export const futureServices: Service[] = [];

export const homePhotos = [
  {
    src: '/assets/photos/team/eloise-truck.jpg',
    alt: "Eloise, Iron Path's red work truck, loaded for a job in the Methow Valley",
    caption: 'Eloise',
    href: '/about/',
    featured: true,
    position: 'center 58%',
  },
  {
    src: '/assets/photos/jobs/junk-load-1.jpg',
    alt: "A Junk Removal load sorted in Eloise's truck bed",
    caption: 'Junk Removal',
    href: '/products-services/#junk-removal',
    position: 'center 42%',
  },
  {
    src: '/assets/photos/jobs/house-cleaning.jpg',
    alt: 'House Cleaning in progress with soapy sponge and faucet',
    caption: 'House Cleaning',
    href: '/products-services/#cleaning',
    position: 'center 38%',
  },
  {
    src: '/assets/photos/shredding/archive-paper-stacks.jpg',
    alt: 'Paper records prepared for Secure Paper Shredding',
    caption: 'Secure Paper Shredding',
    href: '/products-services/#document-shredding',
    position: 'center 45%',
  },
  {
    src: '/assets/photos/jobs/organ-in-truck.jpg',
    alt: 'A wrapped furniture haul in Eloise during a job',
    caption: 'On the job',
    href: '/stories/',
    position: 'center 50%',
  },
];

export const initiatives = [
  {
    title: 'The Green Initiative',
    summary:
      'Refurbishing what can be saved, selling discounted reclaimed firewood, and turning safe paper waste into Blazers.',
    details: [
      'We recycle by refurbishing junk that has a second life.',
      'Safe burnable wood becomes affordable refurbished firewood bundles.',
      'Safe burnable paper is pulped into 100% recycled fire starter blocks.',
    ],
  },
  {
    title: 'The Red Carpet Initiative',
    summary:
      'A complimentary confidence-building spotlight: your moment to strut, be a star, and share positivity on Iron Path social channels.',
    details: [
      'Help people take their Red Carpet Moment with confidence and fun.',
      'We capture the moment and share positivity on our social media.',
      'Complimentary alongside Karaoke hosting — never an upsell.',
      'See the Karaoke page for booking and Red Carpet details.',
    ],
    href: '/karaoke/#red-carpet',
  },
  {
    title: 'Methow Valley Investment Strategy',
    summary: communityPledge.summary,
    details: [
      '3% of Iron Path Services net profits is pledged back into the Methow Valley.',
      '100% of funds donated to the valley fund goes to the valley.',
      'Every pledged dollar is published on the live Investment Tracker.',
    ],
  },
  {
    title: 'Iron Path Volunteer Program',
    summary:
      'Volunteer opportunities for high schoolers and families to serve the community and build leadership.',
    details: [
      'Designed for real work, service, and confidence building.',
      'Volunteer recognition items may include a T-shirt, hat, or pin when available.',
    ],
  },
  {
    title: 'The Referral Ecosystem',
    summary:
      'Formal partnerships with local businesses so the right neighbor gets the call when Iron Path is not the right fit.',
    details: [
      'A living directory of trusted businesses we support.',
      'Built on service, community, and shared local reputation.',
    ],
  },
  {
    title: 'World of SolarPunk',
    summary:
      'Technology and green living working together to create jobs and a healthier, more balanced world.',
    details: [
      'A long-term creative lens for responsible technology, local resilience, and reuse.',
    ],
  },
];

export const processSteps = [
  ['Reach Out', 'Call, text, WhatsApp, social message, or fill out the quote form. Tell us what you need and where you are located.'],
  ['Fast Response', 'We follow up with a call, message, or scheduled visit so you are not left waiting.'],
  ['Transparent Quote', 'You receive a written, itemized price breakdown before work begins.'],
  ['Approve & Schedule', 'Once approved, we confirm invoice timing, any required deposit, and your scheduled date in writing.'],
  ['Scheduled Work', 'We confirm the date and time clearly and respect your schedule.'],
  ['We Show Up', 'The team arrives prepared, works efficiently, and leaves the space better than we found it.'],
  ['Photos & Approval', 'Before and after photos document the job. Final payment follows the approved invoice terms.'],
  ['Follow Up', 'We check in after the job because your experience matters after we leave.'],
];

export const faqs = [
  ['Are you licensed and insured?', 'Yes. Iron Path Services is fully insured and operates as a legitimate local business.'],
  ['How does the fuel surcharge work?', 'The surcharge is tiered by local gas price at 0%, 3%, 5%, or 8% and is disclosed before booking.'],
  ['How does payment work?', 'Payment timing is agreed before work begins. Cash, check, bank transfer/ACH, and debit have no processing fee. Venmo, CashApp, and credit card invoices include a 3% processing fee, itemized on the invoice. Quoted prices are final with no post-job additions.'],
  ['Are there any hidden fees?', 'No. Travel fees, add-ons, fuel surcharges, sales tax, and any payment processing fee are disclosed upfront before you commit.'],
  ['How does Secure Paper Shredding work?', 'Pick-up and on-site witnessed shredding only — no drop-off location is currently available. A certificate of destruction is $5 or complimentary depending on the job.'],
  ['Do you offer same-day service?', 'Often, depending on availability. Same-day priority is +$80 and is only offered when it is the only remaining slot.'],
  ['How far do you travel?', 'Mazama, Winthrop, and Twisp have no travel fee. Carlton adds $30. Brewster and Pateros add $60. Beyond 60 miles from Winthrop is $2.25 per mile.'],
  ['What happens if I need to cancel?', 'Cancellations under 24 hours are $40 flat. A no-show or lockout is $60 flat.'],
  ['When will Transit launch?', 'Iron Path Transit is coming soon for Twisp, Winthrop, and Mazama. Pricing will be announced when the service launches.'],
  ['How do vending and ATM services work?', 'We supply, install, stock, maintain, and service the machine. Host locations receive 30% of net sales. Event ATM service is coming soon. Vending Machines and ATMs are listed under Secondary Services.'],
  ['Where do you service?', 'We serve Winthrop, Twisp, Mazama, Carlton, Methow, Pateros, Brewster, Monse, Ophir, Malott, Chillowist, Okanogan, Omak, and surrounding areas.'],
];

export type Review = {
  name: string;
  location: string;
  service: string;
  date: string;
  rating: number;
  quote: string;
  recommend?: string;
};

export const reviews: Review[] = [
  {
    name: 'Andrew B',
    location: 'Winthrop, WA',
    service: 'Junk Removal',
    date: 'August 11, 2026',
    rating: 5,
    quote:
      'The Iron Path team was responsive, easy to work across an array of pick-up, sorting, donating, disposal tasks. Would definitely use and recommend to others.',
    recommend: 'Absolutely',
  },
];

export type PriceTable = {
  title?: string;
  columns: string[];
  rows: string[][];
};

export type PriceGroup = {
  id: string;
  title: string;
  em: string;
  note: string;
  tally?: 'paperShredding';
  tables: PriceTable[];
};

const junkAddOnRows: string[][] = [
  ['Stairs / Difficult Access', '+$20–$50 / floor'],
  ['Dense / Heavy Material Surcharge', '+$80–$150'],
  ['Appliance Refrigerant Disposal (legally required)', '+$20–$60'],
  ['Commercial Hazmat Coordination', '+$50–$150'],
  ['EPA-Compliant Certified Disposal', 'Included'],
  ['Long Carry (50ft+ from truck)', '+$20–$40'],
  ['Extra Stop (additional pickup location, same job)', '+$40 flat'],
  ['E-Waste Disposal (TVs, monitors)', '+$15–$30 / item'],
  ['Paint / Chemical / Propane Tank Disposal', '+$15–$40 / item'],
  ['Locked Gate / Access Coordination', '+$20 flat'],
];

export const generalPriceGroups: PriceGroup[] = [
  {
    id: 'junk-removal',
    title: 'Junk Removal',
    em: 'estimates.',
    note: 'Prices below are estimates. Reach out for an official quote. Larger item fees may apply on top of the minimum.',
    tables: [
      {
        title: 'Load size',
        columns: ['Tier', 'Price'],
        rows: [
          ['Minimum', '$85'],
          ['Truck Bed', '$180'],
          ['Truck Bed + Trailer 1/4', '$280'],
          ['Truck Bed + Trailer 1/2', '$480'],
          ['Truck Bed + Trailer 3/4', '$660'],
          ['Truck Bed + Trailer Full', '$800'],
        ],
      },
      {
        title: 'Large items',
        columns: ['Item', 'Price'],
        rows: [
          ['Mattress / Box Spring', '$50'],
          ['Couch / Loveseat', '$100–$160'],
          ['Refrigerator', '$100'],
          ['Washer / Dryer', '$90'],
          ['Hot Tub (cut & haul)', '$480–$800'],
          ['Upright Piano', '$380–$700'],
          ['Small Shed Demolition', 'From $520'],
          ['Concrete / Dirt / Roofing', 'By weight — quoted on-site'],
        ],
      },
      {
        title: 'Add-on fees',
        columns: ['Add-On', 'Price'],
        rows: junkAddOnRows,
      },
    ],
  },
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    em: 'packages.',
    note: 'Standard, deep, and move-out packages include the listed labor hours. Additional time is $90/hr.',
    tables: [
      {
        title: 'Packages',
        columns: ['Package', 'Price', 'Labor-Hrs'],
        rows: [
          ['Standard Clean', '$175', 'Up to 2'],
          ['Deep Clean', '$380', 'Up to 4'],
          ['Move-Out Clean', '$460', 'Up to 5'],
          ['Additional Cleaning Time', '$90/hr', 'Beyond included hours'],
        ],
      },
      {
        title: 'Add-on / condition fees',
        columns: ['Add-On', 'Price'],
        rows: [
          ['Customer-Supplied Cleaning Products', '–$25'],
          ['Heavily Soiled / First-Time Condition', '+$50–$100'],
          ['Pet Hair / Animal Condition', '+$20–$50'],
          ['Inside Oven', '+$25'],
          ['Inside Fridge', '+$25'],
          ['Interior Cabinets (emptied)', '+$30–$50'],
          ['Laundry (blankets/linens only, per load)', '+$15 / load'],
          ['Baseboards / Wall Spot-Cleaning', '+$20–$35'],
          ['Blinds Cleaning', '+$2 / blind'],
        ],
      },
      {
        title: 'Window cleaning',
        columns: ['Service', 'Price'],
        rows: [
          ['Interior / Exterior / Both', '$3 / $4 / $6 per window'],
          ['Screens · Tracks · Sliding Door · French Door', '$2.50 · $4 · $12 · $2/pane'],
          ['Hard Water Treatment · 2nd Floor · 3rd Floor', '+$20/pane · +$2 · +$5 per window'],
        ],
      },
    ],
  },
  {
    id: 'firewood',
    title: 'Firewood Services',
    em: 'rates.',
    note: 'Delivery included for Mazama, Winthrop, and Twisp. Carlton, Methow, Brewster, and Pateros use the standard travel fee.',
    tables: [
      {
        title: 'Seasoned firewood',
        columns: ['Item', 'Price'],
        rows: [
          ['Campfire Bundle (seasoned, pick-up or delivery)', '$10'],
          ['Half Cord (seasoned)', '$235'],
          ['Full Cord (seasoned)', '$425'],
          ['Bulk Order (10+ cords)', '10% off — automatic'],
        ],
      },
      {
        title: 'Wood processing (cut & split customer-supplied wood — no felling)',
        columns: ['Rate', 'Price'],
        rows: [
          ['Per Cord', '$75–$90'],
          ['Per Hour, Labor', '$50 / hr'],
          ['Per Hour, Customer Supplies Equipment', '$35 / hr'],
        ],
      },
      {
        title: 'Wood processing add-ons',
        columns: ['Add-On', 'Price'],
        rows: [
          ['Stack-in-Place (vs. dump-and-leave)', '+$20 / cord'],
          ['Debris Haul-Away (post-processing)', '+$40–$60 / load'],
        ],
      },
      {
        title: 'Retail — Green Initiative',
        columns: ['Product', 'Price'],
        rows: [
          ['Salvaged Wood Bundle', '$5'],
          ['Campfire Bundle (retail)', '$10'],
          ['Iron Path Blazers — Single', '$4.99'],
          ['Iron Path Blazers — 3-Pack', '$10.99'],
          ['Iron Path Blazers — 5-Pack', '$16.99'],
          ['Iron Path Blazers — 10-Pack', '$30.99'],
          ['Iron Path Blazers — 20-Pack', '$50.99'],
        ],
      },
    ],
  },
  {
    id: 'document-shredding',
    title: 'Secure Paper Shredding',
    em: 'pricing.',
    note: 'Pick-up and on-site service only — no drop-off location is currently available.',
    tally: 'paperShredding',
    tables: [
      {
        columns: ['Item', 'Price'],
        rows: [
          ['Bankers Box (pick-up)', '$14 / box'],
          ['77-Gallon Locked Bin (pick-up)', '$1.50 / lb'],
          ['On-Site / Witnessed Mobile Shredding', '$1.50/lb + $30 flat'],
          ['Minimum Service Charge (one-time pickups)', '$35'],
          ['Recurring Monthly Bin Service (1 bin)', '$50 / month'],
          ['Large Volume (10+ boxes / 300+ lbs)', '10% off'],
          ['Certificate of Destruction — paper / emailed', '$5 / Complimentary'],
          ['Bin Weight Overage (over rated bin capacity)', '+$2 / lb over limit'],
        ],
      },
    ],
  },
  {
    id: 'secondary-services',
    title: 'Secondary services',
    em: 'and more.',
    note: 'You need something done, just ask. Karaoke Hosting is not an official core service. Iron Path Transit and Event ATM are coming soon.',
    tables: [
      {
        title: 'Karaoke Hosting',
        columns: ['Option', 'Price'],
        rows: [
          ['Flat rate (up to 4 hrs)', '$150'],
          ['Additional time', '$35–$50 / hr'],
          ['4-week prepaid package', '$500 ($125/event)'],
          ['Holiday / large events', '$200+ (quoted)'],
        ],
      },
      {
        title: 'Hourly services',
        columns: ['Service', 'Price'],
        rows: [['General labor (per person)', '$40 / hr']],
      },
      {
        title: 'Moving',
        columns: ['Item', 'Price'],
        rows: [
          ['Labor (per person)', '$40 / hr'],
          ['Vehicle Add-On', '$150 flat'],
          ['Furniture Disassembly / Reassembly', '+$25–$40 / item'],
          ['Long Carry (50ft+ or extra flights)', '+$20–$40'],
          ['Packing / Unpacking Labor', '+$40 / hr'],
        ],
      },
      {
        title: 'Event ATM',
        columns: ['Status', 'Price'],
        rows: [['Event ATM', 'Not available yet — Coming Soon']],
      },
      {
        title: 'Vending Machines & ATMs',
        columns: ['Item', 'Details'],
        rows: [
          ['Vending machine placement', 'No host cost'],
          ['ATM placement', 'No host cost · Event ATM coming soon'],
          ['Restocking and maintenance', 'Included'],
          ['Host location revenue', '30% of net sales'],
          ['Standard contract term', '12 months · flexible terms available'],
        ],
      },
    ],
  },
];

export const commercialPriceGroups: PriceGroup[] = [
  {
    id: 'commercial-junk',
    title: 'Commercial Junk Removal',
    em: 'rates.',
    note: 'Large item pricing shown below is the commercial rate (flat +25% over residential). Base truck/trailer tiers are quoted per scope.',
    tables: [
      {
        title: 'Large items',
        columns: ['Item', 'Commercial Price'],
        rows: [
          ['Mattress / Box Spring', '$65'],
          ['Couch / Loveseat', '$125–$200'],
          ['Refrigerator', '$125'],
          ['Washer / Dryer', '$115'],
          ['Hot Tub (cut & haul)', '$600–$1,000'],
          ['Upright Piano', '$475–$875'],
          ['Small Shed Demolition', 'From $650'],
          ['Concrete / Dirt / Roofing', 'By weight — quoted on-site'],
        ],
      },
      {
        title: 'Add-on fees',
        columns: ['Add-On', 'Price'],
        rows: [
          ...junkAddOnRows,
          ['Custom Jobs (manpower)', '$40 / hr per person + item pricing'],
        ],
      },
    ],
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial House Cleaning',
    em: 'quotes.',
    note: 'Commercial spaces are quoted by scope. Recurring commercial service of 6+ months qualifies for an additional 15% discount, applied across all commercial lines.',
    tables: [
      {
        columns: ['Service', 'Price'],
        rows: [
          ['Commercial Space', '$0.15–$0.35 / sq ft — quoted by scope'],
          ['Lodge / STR Turnover', '$30–$50 / room — quoted by scope'],
          ['Office / Retail Recurring Contract', 'Custom quote'],
          ['Post-Construction Cleanup', 'Custom quote / per scope'],
        ],
      },
    ],
  },
  {
    id: 'commercial-firewood',
    title: 'Firewood — Retail',
    em: 'wholesale.',
    note: 'Wholesale campfire bundles require a 10-unit minimum.',
    tables: [
      {
        columns: ['Product', 'Price'],
        rows: [
          ['Campfire Bundle (retail)', '$10'],
          ['Campfire Bundle — Wholesale (gas stations/stores, 10-unit min)', '$3.75 each'],
          ['Half Cord / Full Cord (commercial)', '$235 / $425'],
        ],
      },
    ],
  },
  {
    id: 'commercial-karaoke',
    title: 'Karaoke Hosting',
    em: 'for events.',
    note: 'Not an official core service. Quotes are confirmed before booking.',
    tables: [
      {
        columns: ['Option', 'Price'],
        rows: [
          ['Flat rate (up to 4 hrs)', '$150'],
          ['Additional time', '$35–$50 / hr'],
          ['Holiday / large events', '$200+ (quoted)'],
        ],
      },
    ],
  },
  {
    id: 'commercial-shredding',
    title: 'Secure Paper Shredding — Commercial',
    em: 'contracts.',
    note: 'Recurring commercial service of 6+ months qualifies for an additional 15% discount, applied across all commercial lines.',
    tally: 'paperShredding',
    tables: [
      {
        columns: ['Item', 'Price'],
        rows: [
          ['77-Gallon Locked Bin (pick-up)', '$1.50 / lb'],
          ['On-Site / Witnessed Mobile Shredding', '$1.50/lb + $30 flat'],
          ['Large Volume (10+ boxes / 300+ lbs)', '10% off'],
          ['Recurring Business Service (weekly/biweekly/monthly)', 'Custom quote'],
          ['Certificate of Destruction — paper / emailed', '$5 / Complimentary'],
        ],
      },
    ],
  },
];

export const communityGiveBack = {
  note: '100% of the selected donation goes to the Methow Valley Fund. Add a donation to any service.',
  rows: [
    ['Neighbor', '$2'],
    ['Community Supporter', '$5'],
    ['Valley Builder', '$10'],
    ['Community Champion', '$20'],
    ['Custom Amount', 'Your choice'],
  ] as string[][],
};

export const travelFeeNote =
  'Mazama, Winthrop, and Twisp: no travel fee. Carlton: +$30. Brewster/Pateros: +$60. Beyond 60 miles from Winthrop: $2.25/mile. All fees disclosed upfront.';

export const fees = [
  ['Same-Day Priority (only when it is the only slot)', '+$80'],
  ['After-Hours Service', '+15%'],
  ['Cancellation Under 24 Hours', '$40 flat'],
  ['No-Show / Lockout', '$60 flat'],
  ['Travel — Mazama / Winthrop / Twisp', 'None'],
  ['Travel — Carlton', '+$30'],
  ['Travel — Brewster / Pateros', '+$60'],
  ['Travel — beyond 60 mi from Winthrop', '$2.25 / mile'],
  ['Fuel Surcharge (tiered by local gas price)', '0% / +3% / +5% / +8%'],
  ['Payment Processing Fee (Venmo, CashApp, credit card invoice)', '3%'],
];

export const paymentProcessingNote =
  'Not applied to cash, check, or bank transfer/ACH. Never applied to debit cards (per federal law). Itemized as a separate line on every invoice: Subtotal / Payment Processing Fee (3%) / Total.';

export const discounts = [
  ['Community Service (Senior, Veteran/Military, First Responder, Teacher/Educator)', '15%'],
  ['New Customer', '10%'],
  ['Multi-Service Bundle (2+ services booked together)', '12%'],
  ['Referral — Referrer / Referred', '$20 off / $10 off'],
  ['Recurring Commercial Service (6+ months)', '15%'],
  ['Loyalty (repeat customer)', '10%'],
];

export const commercialDiscounts = [
  ['New Customer', '10%'],
  ['Multi-Service Bundle (2+ services booked together)', '12%'],
  ['Recurring Commercial Service (6+ months, all commercial lines)', '15%'],
  ['Community Giving Discount (Methow Valley Fund donation)', '2–5%'],
];

export const communityGivingDiscounts = [
  ['Qualifying donation', '2% off'],
  ['Larger donation', '3% off'],
  ['Major / community-supporting donation', '5% off'],
];

export const salesTax = [
  ['Winthrop', '8.5%'],
  ['Twisp', '8.7%'],
  ['Pateros', '8.6%'],
  ['Brewster', '8.4%'],
  ['Okanogan Co. Unincorporated', '8.0%'],
  ['Colville Tribes PTBA', '8.4%'],
];

export const salesTaxNote =
  'Locations not listed above will have the combined rate of the closest listed location applied.';

export const promotions: Array<{
  title: string;
  details: string;
  finePrint: string;
  status?: string;
  promoCode?: string;
  optionsHeading?: string;
  prizeOptions?: string[];
  offerDetails?: string[];
  socialEntries?: Array<{
    platform: 'facebook' | 'instagram';
    label: string;
    handle: string;
    href: string;
    entries: string;
  }>;
  entrySteps?: string[];
  bonusEntries?: string[];
  nominationDetails?: string;
  dates?: Array<{
    label: string;
    value: string;
  }>;
  cta?: {
    label: string;
    href: string;
  };
}> = [
  {
    title: 'Iron Path Giveaway',
    status: 'Giveaway open now.',
    details:
      'One lucky winner will choose one prize from Iron Path Services: free junk removal, free house cleaning, or a $250 service credit toward any Iron Path service.',
    optionsHeading: 'Prize choices',
    prizeOptions: [
      'Free junk removal up to one trailer load, equivalent to 2 truck loads',
      'Free house cleaning up to 3 hours',
      '$250 credit toward any Iron Path service',
    ],
    dates: [
      { label: 'Winner announced', value: 'September 30, 2026' },
      { label: 'Prize must be used by', value: 'October 31, 2026' },
    ],
    entrySteps: [
      'Like the giveaway post for +1 entry',
      'Comment "DONE" and tag 2 friends for +1 entry',
    ],
    socialEntries: [
      {
        platform: 'facebook',
        label: 'Follow on Facebook',
        handle: 'Iron Path Services',
        href: contact.facebook,
        entries: '+1 entry',
      },
      {
        platform: 'instagram',
        label: 'Follow on Instagram',
        handle: '@ironpathservices',
        href: contact.instagram,
        entries: '+1 entry',
      },
    ],
    bonusEntries: [
      'Share the giveaway post to your story for +3 entries',
      'Request a free estimate for +3 entries',
      'Join the email list for +2 entries',
      'Nominate someone deserving through the Google Form for +2 entries',
      'Post a photo of a cleaning project, cluttered room, junk pile, or dirty trash can and tag Iron Path Services for +3 entries',
    ],
    nominationDetails:
      'If a nominated person is selected, the nominee receives their choice of free junk removal, free house cleaning, or a $250 service credit. The nominator receives 1 hour of cleaning or a $50 service credit.',
    cta: {
      label: 'Open Promotion Form',
      href: googleForms.promotion,
    },
    finePrint:
      'No purchase necessary. Must be 18 years or older and reside within Iron Path Services service area. Promotion is not sponsored, endorsed, administered by, or associated with Facebook or Instagram. One winner will be selected at random after entries close. Prize value not to exceed $250.',
  },
];

export const founderLetter = [
  'Iron Path Services was founded in March 2026 in the Methow Valley by two people who believed this place deserved a different kind of service company.',
  "I'm Benji, the founder and Strategy Architect. I came to the Methow the way a lot of people do: chasing something the rest of the country had stopped offering. Open country. Honest work. Neighbors who notice when your truck has not moved in a few days.",
  `I was working as a server at Sun Mountain Lodge when the idea for Iron Path started taking shape: the valley needed reliable, professional services - ${serviceTagline} ${servicePromise}`,
  'My partner Adrian, our Operations Architect, left Utah to build this with me. He runs financial operations overnight in another industry and brings the discipline and structure that keeps a young company from drifting.',
  'Between the two of us, we own and run every part of this business - no absentee investors, no corporate playbook handed down from somewhere else.',
  'The name Iron Path comes from what we believe service work actually is: a path you forge by showing up, doing it right, and earning trust one job at a time. Our tagline, A Path Forged In Trust, is not marketing. It is the standard we hold each other to.',
  "I will not pretend this is a finished story. We are a year-one company. We are learning fast, making mistakes faster, and writing the playbook as we go. But the direction is clear: build something durable, build it honestly, and build it here.",
  "If you have got a job that needs doing in the Methow Valley, we would be honored to earn it.",
];

export const storyCards = [
  {
    title: 'Job stories and pictures',
    text: 'Follow along for before-and-after field notes, customer stories, and project highlights from the valley.',
    image: '/assets/photos/jobs/organ-in-truck.jpg',
    imageAlt: 'A carefully wrapped and strapped load in the Iron Path truck bed',
  },
  {
    title: 'Community moments',
    text: 'A home for Karaoke nights, Red Carpet Initiative moments, volunteer days, and local partnerships.',
    image: '/assets/photos/community/dinosaur-whimsy-1.jpg',
    imageAlt: 'Iron Path community whimsy on a Methow Valley riverbank',
  },
  {
    title: 'Inspirational stories',
    text: 'Short reflections from the valley about work, service, reuse, and resilience.',
    image: '/assets/photos/community/whimsical-sword.jpg',
    imageAlt: 'A training sword in the Methow riverbed at golden hour',
  },
];

export const karaokePage = {
  eyebrow: 'Karaoke Hosting',
  title: 'An awesome karaoke night, <em>fully handled.</em>',
  lead:
    'Not an official service line — just a fun Iron Path offering. We bring the speakers, microphones, song list, setup, host, and everything else you need for a great night.',
  note: 'Professional Karaoke Hosting · starting at $150',
  includes: [
    'Full sound system included',
    'Wireless and wired microphones',
    'Thousands of songs',
    'Setup and teardown included',
    'Reliable, friendly host',
    'Speakers, karaoke list, and all needed gear',
  ],
  rates: [
    {
      label: 'Standard rate',
      price: '$150 flat',
      detail: 'Up to 4 hours of hosting',
    },
    {
      label: '4-week recurring package',
      price: '$500',
      detail: 'Paid in advance · $125 per event · regular 4 hours each night',
      featured: true,
    },
    {
      label: 'Additional time',
      price: '$35–50 / hour',
      detail: 'After the first 4 hours',
    },
    {
      label: 'Holiday or large events',
      price: '$200+',
      detail: 'Quoted for bigger nights and holidays',
    },
  ],
  redCarpet: {
    eyebrow: 'Complimentary',
    title: 'A Red Carpet Moment',
    summary:
      'Help build community confidence with the Iron Path Red Carpet Initiative. Our goal is to give people their moment to strut their stuff and be a star — we post it on our social media and share positivity.',
    details: [
      'Your moment to shine, no pressure and all fun',
      'Built to boost community confidence',
      'Shared on Iron Path social channels with positivity first',
      'Complimentary — included as a community add-on, not a paid upsell',
    ],
  },
  howItWorks: [
    ['Book the night', 'Tell us the date, location, and how long you want to go. We confirm availability and pricing up front.'],
    ['We bring everything', 'Sound system, mics, song list, host, setup, and teardown — you focus on the guests.'],
    ['Sing and celebrate', 'We keep the energy friendly and the playlist rolling so everyone gets a turn.'],
    ['Optional Red Carpet Moment', 'Want the spotlight? Add a complimentary Red Carpet Moment and we help share the positivity.'],
  ],
  faqs: [
    ['Is Karaoke an official Iron Path service?', 'No. Karaoke hosting is a fun community offering we provide separately from our core services.'],
    ['What is included in the $150 rate?', 'Up to 4 hours with speakers, microphones, karaoke list, setup, teardown, and a reliable host.'],
    ['What is the 4-week recurring package?', 'Book four karaoke nights for $500 paid in advance — $125 per event, with the regular 4 hours of hosting each night.'],
    ['What is a Red Carpet Moment?', 'A complimentary confidence-building spotlight where guests get their star moment. We may share it on social media to spread positivity.'],
    ['Can you do holidays or large events?', 'Yes. Holiday and large-event hosting starts at $200+ and is quoted for the size of the night.'],
  ],
};
