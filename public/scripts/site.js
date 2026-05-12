const googleFormEndpoints = {
  quote: '',
  review: '',
  newsletter: '',
  general: '',
  volunteer: '',
  evaluation: '',
  image: '',
};

function buildMailto(form, data) {
  const admin = form.dataset.adminEmail || 'admin@ironpathservices.com';
  const support = form.dataset.supportEmail || 'support@ironpathservices.com';
  const type = form.dataset.formType || 'website';
  const subject = encodeURIComponent(`Iron Path Website ${type} request`);
  const body = encodeURIComponent(
    Object.entries(data)
      .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
      .join('\n')
  );
  return `mailto:${admin}?cc=${support}&subject=${subject}&body=${body}`;
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
      const endpoint = googleFormEndpoints[form.dataset.formType || 'general'];

      if (endpoint) {
        try {
          await fetch(endpoint, {
            method: 'POST',
            mode: 'no-cors',
            body: new FormData(form),
          });
          form.reset();
          if (status) status.textContent = 'Submitted. Thank you - we will follow up soon.';
          return;
        } catch (error) {
          if (status) status.textContent = 'Google Forms could not be reached. Opening email fallback.';
        }
      } else if (status) {
        status.textContent = 'Opening your email app with the request addressed to Iron Path.';
      }

      window.location.href = buildMailto(form, data);
    });
  });
}

initMenu();
initReveal();
initForms();
