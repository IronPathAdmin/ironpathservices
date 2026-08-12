const googleFormEndpoints = {
  quote: 'https://forms.gle/d1u58XK3wpbYDrcD6',
  review: 'https://forms.gle/V3KNfNb3soMkNpeDA',
  newsletter: '',
  general: 'https://forms.gle/d1u58XK3wpbYDrcD6',
  volunteer: 'https://forms.gle/eTywiDqx76tG19zw5',
  evaluation: '',
  image: 'https://forms.gle/7abciXX1tcqRWqZi6',
  karaoke: '',
};

const formTypeLabels = {
  quote: 'Quote Request',
  review: 'Customer Review',
  newsletter: 'Newsletter Signup',
  general: 'General Request',
  volunteer: 'Volunteer Application',
  evaluation: 'Customer Evaluation',
  image: 'Image Submission',
  karaoke: 'Karaoke & Red Carpet',
  website: 'Website Request',
};

const fieldLabels = {
  name: 'Full name',
  email: 'Email address',
  phone: 'Phone number',
  preferred_contact: 'Preferred contact method',
  service: 'Service requested',
  preferred_date: 'Preferred date',
  address: 'Service address',
  rating: 'Star rating',
  service_received: 'Service received',
  interest: 'Interest',
  preferred_location: 'Preferred town or venue',
  message: 'Message',
};

const contactFields = ['name', 'email', 'phone', 'preferred_contact'];
const jobFields = [
  'service',
  'preferred_date',
  'address',
  'rating',
  'service_received',
  'interest',
  'preferred_location',
];
const knownFields = new Set([...contactFields, ...jobFields, 'message']);

function readableValue(value) {
  const text = String(value ?? '').trim();
  return text || 'Not provided';
}

function formLabel(type) {
  return formTypeLabels[type] || formTypeLabels.website;
}

function jobType(type, data) {
  if (type === 'quote') return readableValue(data.service).replace('Not provided', 'General Quote');
  if (type === 'karaoke') {
    return readableValue(data.interest).replace('Not provided', 'Karaoke & Red Carpet');
  }
  return formLabel(type);
}

function formatSection(title, fields, data) {
  const rows = fields
    .filter((field) => field in data)
    .map((field) => `${fieldLabels[field] || field}: ${readableValue(data[field])}`);

  return rows.length ? [title, ...rows, ''] : [];
}

function buildEmailBody(type, data) {
  const additionalFields = Object.keys(data).filter((field) => !knownFields.has(field));
  const submittedAt = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date());

  return [
    'IRON PATH SERVICES',
    'WEBSITE FORM SUBMISSION',
    '========================================',
    '',
    'FORM DETAILS',
    `Form type: ${formLabel(type)}`,
    `Job type: ${jobType(type, data)}`,
    `Submitted: ${submittedAt}`,
    `Website page: ${window.location.href}`,
    '',
    ...formatSection('CONTACT INFORMATION', contactFields, data),
    ...formatSection('JOB DETAILS', jobFields, data),
    ...formatSection('ADDITIONAL DETAILS', additionalFields, data),
    'MESSAGE',
    readableValue(data.message),
    '',
    '========================================',
    data.email ? `Reply to this customer at: ${readableValue(data.email)}` : '',
  ]
    .filter((line, index, lines) => line || lines[index - 1])
    .join('\r\n');
}

function buildMailto(form, data) {
  const leads = form.dataset.leadsEmail || 'leads@ironpathservices.com';
  const type = form.dataset.formType || 'website';
  const sender = readableValue(data.name || data.email).replace('Not provided', 'New submission');
  const subject = encodeURIComponent(`Website Form | ${jobType(type, data)} | ${sender}`);
  const body = encodeURIComponent(buildEmailBody(type, data));
  return `mailto:${leads}?subject=${subject}&body=${body}`;
}

function initMenu() {
  const button = document.querySelector('.menu-toggle');
  if (!button) return;
  button.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(open));
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  items.forEach((item) => observer.observe(item));
}

function initForms() {
  document.querySelectorAll('.js-smart-form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = form.querySelector('.status');
      const data = Object.fromEntries(new FormData(form).entries());
      const googleFormUrl =
        form.dataset.googleForm || googleFormEndpoints[form.dataset.formType || 'general'];

      if (googleFormUrl && status) {
        status.textContent =
          'Opening a neatly formatted email addressed to leads@ironpathservices.com. You can also use the official Google Form button.';
      } else if (status) {
        status.textContent =
          'Opening a neatly formatted email addressed to leads@ironpathservices.com.';
      }

      window.location.href = buildMailto(form, data);
    });
  });
}

initMenu();
initReveal();
initForms();
