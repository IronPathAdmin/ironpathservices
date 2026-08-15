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

export const googleForms = {
  generalQuote: 'https://forms.gle/d1u58XK3wpbYDrcD6',
  firewoodOrder: 'https://forms.gle/WQLiw38JNapzAdTE6',
  vendingAtm: 'https://forms.gle/NkjWbquUTVtQyoUY9',
  paperShredding: 'https://forms.gle/9bvEneuDMWGYH7677',
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

export const formLinks = [
  {
    title: 'General Service Quote Request',
    href: googleForms.generalQuote,
    description: 'Use this for cleaning, junk removal, multi-service jobs, and general estimates.',
  },
  {
    title: 'Firewood Order',
    href: googleForms.firewoodOrder,
    description: 'Order campfire bundles, individual bundles, cords, and recycled fire products.',
  },
  {
    title: 'Vending / ATM Placement Inquiry',
    href: googleForms.vendingAtm,
    description: 'Start a host-location conversation for vending machines or ATMs.',
  },
  {
    title: 'Secure Paper Shredding',
    href: googleForms.paperShredding,
    description: 'Request secure paper shredding and certificates of destruction.',
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

export const services = [
  {
    title: 'Cleaning Services',
    slug: 'cleaning',
    image: '/assets/img-tractor.jpg',
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
    price: 'From $150',
  },
  {
    title: 'Junk Removal',
    slug: 'junk-removal',
    image: '/assets/img-junkyard.jpg',
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
    price: '$80-$160 minimum',
  },
  {
    title: 'Document Shredding',
    slug: 'document-shredding',
    image: '/assets/img-pipes.jpg',
    galleryReady: false,
    gallery: [
      {
        src: '/assets/photos/shredding/paper-record-stacks.jpg',
        alt: 'Stacks of paper records prepared for secure shredding',
      },
      {
        src: '/assets/photos/shredding/archive-paper-stacks.jpg',
        alt: 'Bundled archive paperwork before secure destruction',
      },
      {
        src: '/assets/photos/shredding/colorful-shredded-paper.jpg',
        alt: 'Colorful shredded paper after document destruction',
      },
    ],
    summary:
      'On-site shredding, off-site shredding, security guarantee, and certificates of destruction.',
    description:
      'Secure document destruction options for residents and businesses, with a clear chain of custody and a certificate of destruction when requested.',
    bullets: [
      'On-site or off-site shredding options',
      'Security-first handling practices',
      'Certificate of destruction available',
      'Paper waste routed toward recycled fire starter production when safe',
    ],
    price: 'From $40',
  },
  {
    title: 'Firewood Sales',
    slug: 'firewood',
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
    title: 'Vending & ATM',
    slug: 'vending-atm',
    image: '/assets/img-vending.jpg',
    summary:
      'Commercial vending machines, ATMs, 30% host revenue, and several machine options.',
    description:
      'Passive revenue options for local businesses. Iron Path supplies, installs, stocks, maintains, and services the machines.',
    bullets: [
      'Commercial vending machine placement',
      'Commercial ATM placement',
      '30% net revenue share to host locations',
      'ATM fees set at $3.50 per withdrawal',
      'Machine options matched to your location',
    ],
    price: 'No upfront host cost',
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
    summary:
      'A pledge to reinvest a meaningful percentage of profits into local businesses, schools, parks, and needs.',
    details: [
      'Launch tracker starts at $50.',
      'Goals grow from $5,000 through $30,000 and beyond.',
      'Funding priorities will be published as the program matures.',
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
  ['How does the fuel surcharge work?', 'The surcharge is tied to current local regular unleaded prices and is disclosed before booking. Below $4.10 per gallon there is no surcharge; higher brackets are listed on the pricing page.'],
  ['How does payment work?', 'Payment timing is agreed before work begins. Accepted methods include cash, check, and on-site card payments. Quoted prices are final with no post-job additions.'],
  ['Are there any hidden fees?', 'No. Travel fees, add-ons, fuel surcharges, and sales tax are disclosed upfront before you commit.'],
  ['How does document shredding work?', 'We offer secure on-site or off-site shredding options and can provide a certificate of destruction when requested.'],
  ['Do you offer same-day service?', 'Often, depending on availability. Same-day priority is an add-on and is never promised unless we can actually deliver.'],
  ['How far do you travel?', 'Winthrop and Twisp have no travel fee. Mazama and Carlton add $30. Brewster and Pateros add $60. Beyond 60 miles from Winthrop is $2.25 per mile.'],
  ['What happens if I need to cancel?', 'Cancellations under 24 hours may be charged a flat dispatch fee. We disclose cancellation terms before booking.'],
  ['How do vending and ATM services work?', 'We supply, install, stock, maintain, and service the machine. Host locations receive 30% of net sales. ATM withdrawal fees are $3.50.'],
  ['Where do you service?', 'We serve Winthrop, Twisp, Mazama, Carlton, Methow, Pateros, Brewster, Monse, Ophir, Malott, Chillowist, Okanogan, Omak, and surrounding areas.'],
];

export const reviews = [
  {
    name: 'Sarah M.',
    location: 'Winthrop, WA',
    service: 'Junk Removal',
    quote:
      'They showed up on time, worked clean, and left the property looking better than I expected. Straightforward pricing, no surprises.',
  },
  {
    name: 'Tom R.',
    location: 'Twisp, WA',
    service: 'Cleanout',
    quote:
      'Great communication start to finish. They sent before and after photos, which I really appreciated.',
  },
  {
    name: 'Linda K.',
    location: 'Mazama, WA',
    service: 'Firewood',
    quote:
      'Ordered firewood and they delivered exactly when they said. Dry, well-split, and stacked neatly.',
  },
  {
    name: 'David W.',
    location: 'Brewster, WA',
    service: 'Property Work',
    quote:
      'Iron Path followed up after the job was done just to check in. That kind of integrity is rare.',
  },
];

export const pricingTables = [
  {
    title: 'Junk Removal',
    note: 'Load size is assessed on-site before work begins. Dump fees and hauling labor are included.',
    rows: [
      ['Residential minimum pickup', '$80-$160', '1-2 items; includes dump fees and labor'],
      ['Residential truck bed load', '$180', 'Silverado 1500 standard bed'],
      ['Residential 1/4 trailer load', '$280', 'Roughly one room of clutter'],
      ['Residential 1/2 trailer load', '$480', 'Garage or basement cleanout'],
      ['Residential 3/4 trailer load', '$700', 'Multi-room cleanout'],
      ['Residential full trailer load', '$900', 'Whole-house or estate clearing'],
      ['Commercial minimum pickup', '$120-$200', '1-2 items; business or site'],
      ['Commercial truck bed load', '$220', 'Silverado 1500 standard bed'],
      ['Commercial full trailer load', '$1,080', 'On-site assessment'],
      ['Large items', '$50-$1,000+', 'Mattresses, couches, appliances, pianos, hot tubs, sheds'],
    ],
  },
  {
    title: 'Cleaning',
    note: 'All supplies and equipment are provided. Staff hold WA Food Worker Cards; IICRC certification targeted by September 30, 2026.',
    rows: [
      ['Standard clean', '$150', '2 hour base; supplies included'],
      ['Deep clean', '$300', '3 hour base; supplies included'],
      ['Move-out clean', '$360', '4 hour base; supplies included'],
      ['Additional cleaner hours', '$50/hr', 'Beyond base time'],
      ['Commercial space', '$0.15-$0.35/sq ft', 'Quoted by scope'],
      ['Lodge / STR turnover', '$30-$50/room', 'Same-day turnaround when available'],
      ['Office / retail recurring contract', 'Custom quote', 'Recurring scope'],
      ['Post-construction cleanup', 'Custom quote', 'Per scope'],
      ['First-time / heavily soiled condition fee', '+$50-$100', 'Communicated before work begins'],
      ['Pet hair / animal fee', '+$20-$50', 'Communicated before work begins'],
      ['Interior window cleaning', '+$20-$40', 'Communicated before work begins'],
    ],
  },
  {
    title: 'Secure Paper Shredding',
    note: 'Drop-off, pick-up, or on-site mobile destruction. Shredded paper is recycled into Iron Path Blazers when possible.',
    rows: [
      ['Small drop-off', '$40 minimum', 'Covers up to 16 lbs; $1.25/lb above 16 lbs'],
      ['One-time purge special', '$80 flat', 'Up to 60 lbs; no weighing'],
      ['Pick-up by weight', '$50 minimum', '$40 base + $1.50/lb above 7 lbs'],
      ['72-gallon bin pickup', '$240', 'Full secure bin collected for off-site destruction'],
      ['Small on-site mobile', '$80 flat', '1-3 bankers boxes; witnessed destruction'],
      ['On-site mobile, 4+ boxes', '$80 + $20/box after box 3', 'Base plus per-box scaling'],
      ['72-gallon bin on-site', '$280', 'Full bin destroyed at your location'],
      ['Certificate of destruction', '$10', 'Free on orders over $100'],
      ['Recurring business service', 'Custom quote', 'Weekly, biweekly, or monthly'],
    ],
  },
  {
    title: 'Firewood & Products',
    note: 'Seasoned and ready to burn. Delivery fees are confirmed at booking before you commit.',
    rows: [
      ['Salvaged wood bundle', '$5', 'Reclaimed scrap wood; kindling or rustic projects'],
      ['Campfire bundle', '$10', 'Single seasoned bundle; pickup or delivery'],
      ['Half cord', '$200', 'Seasoned; residential or commercial'],
      ['Full cord', '$360', 'Seasoned; residential or commercial'],
      ['Bulk order, 10+ cords', '10% off', 'Applied automatically'],
      ['Blazers single', '$4.99', '100% recycled paper-pulp fire starter block'],
      ['Blazers 3-pack', '$10.99', '$3.66 each'],
      ['Blazers 5-pack', '$16.99', '$3.40 each'],
      ['Blazers 10-pack', '$30.99', '$3.10 each'],
      ['Blazers 20-pack', '$50.99', '$2.55 each'],
      ['Refurbished products', 'Varies', 'Reclaimed and restored items from junk removal jobs'],
    ],
  },
  {
    title: 'Vending & ATM',
    note: 'No upfront cost to host locations unless corporate setup is required and approved in advance.',
    rows: [
      ['Vending machine placement', 'No host cost', 'Machine supplied and installed'],
      ['ATM placement', 'No host cost', 'ATM supplied and installed'],
      ['Restocking and maintenance', 'Included', 'Handled by Iron Path'],
      ['Host location revenue', '30%', 'Net sales share'],
      ['ATM withdrawal fee', '$3.50', 'Per withdrawal'],
      ['Standard contract term', '12 months', 'Flexible terms available'],
    ],
  },
];

export const fees = [
  ['Same-day priority service', '+$80'],
  ['After-hours service', '+15%'],
  ['Cancellation under 24 hours', '$40 flat'],
  ['No-show / lockout', '$60 flat'],
  ['Mazama / Carlton travel', '+$30'],
  ['Brewster / Pateros travel', '+$60'],
  ['Beyond 60 miles from Winthrop', '$2.25/mile'],
  ['Fuel below $4.10/gal', 'None'],
  ['Fuel $4.10-$4.75/gal', '+3%'],
  ['Fuel $4.76-$5.25/gal', '+5%'],
  ['Fuel above $5.25/gal', '+8%'],
];

export const discounts = [
  ['$15 credit', 'Pay in full upfront'],
  ['$25 credit', 'Referral credit after a completed paid job'],
  ['10% forever', 'VIP loyalty after 5 completed visits'],
  ['10% off', 'Senior discount, 65+'],
  ['10% off', 'Veteran / military'],
  ['$10 credit', 'Verified Google review credit'],
  ['10% per visit', 'Recurring weekly or biweekly cleaning'],
  ['Variable', 'Donation / resale credit'],
];

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
    title: 'Summer Giveaway: win a free service',
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
      { label: 'Winner announced', value: 'August 20, 2026' },
      { label: 'Prize must be used by', value: 'November 30, 2026' },
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
  {
    title: 'Launch Special: $150 flat',
    status: 'Launch special. First 30 customers only.',
    details:
      'Claim a $150 flat-rate launch special with no gas fees, no hidden charges, and no surprise add-ons.',
    promoCode: 'FIRST30',
    optionsHeading: 'Choose one',
    prizeOptions: [
      'Up to 1 full pickup truck load of junk removal, equivalent to approximately one standard pickup truck load',
      'Up to 2 full hours of house cleaning',
    ],
    dates: [
      { label: 'Available', value: 'Now' },
      { label: 'Schedule and complete by', value: 'November 30, 2026' },
    ],
    offerDetails: [
      'Limited to the first 30 customers',
      'Must be scheduled and completed by November 30, 2026',
      'Available within 10 miles of Winthrop, WA',
      'One service per promotional booking',
      'Subject to scheduling availability',
    ],
    cta: {
      label: 'Claim Launch Special',
      href: googleForms.promotion,
    },
    finePrint:
      'Enter promo code FIRST30 on the service request form. Offer must be scheduled and completed by November 30, 2026. Claim your spot before all 30 are gone.',
  },
];

export const founderLetter = [
  'Iron Path Services was founded in March 2026 in the Methow Valley by three people who believed this place deserved a different kind of service company.',
  "I'm Benji, the founder and Strategy Architect. I came to the Methow the way a lot of people do: chasing something the rest of the country had stopped offering. Open country. Honest work. Neighbors who notice when your truck has not moved in a few days.",
  'I was working as a server at Sun Mountain Lodge when the idea for Iron Path started taking shape: the valley needed reliable, professional services - junk removal, cleaning, firewood, vending, ATMs - delivered by people who actually live here and plan to stay.',
  'My partner Adrian, our Operations Architect, left Utah to build this with me. He runs financial operations overnight in another industry and brings the discipline and structure that keeps a young company from drifting. Sarah, our Client Experience Architect, rounds out the team with the kind of steady judgment you only get from people who have been doing the work for a long time.',
  'Between the three of us, we own and run every part of this business - no absentee investors, no corporate playbook handed down from somewhere else.',
  'The name Iron Path comes from what we believe service work actually is: a path you forge by showing up, doing it right, and earning trust one job at a time. Our tagline, A Path Forged In Trust, is not marketing. It is the standard we hold each other to.',
  "I will not pretend this is a finished story. We are a year-one company. We are learning fast, making mistakes faster, and writing the playbook as we go. But the direction is clear: build something durable, build it honestly, and build it here.",
  "If you have got a job that needs doing in the Methow Valley, we would be honored to earn it.",
];

export const storyCards = [
  {
    title: 'Job stories and pictures',
    text: 'Follow along for before-and-after field notes, customer stories, and project highlights from the valley.',
  },
  {
    title: 'Community moments',
    text: 'A home for Karaoke nights, Red Carpet Initiative moments, volunteer days, and local partnerships.',
  },
  {
    title: 'Inspirational stories',
    text: 'Short reflections from the valley about work, service, reuse, and resilience.',
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
