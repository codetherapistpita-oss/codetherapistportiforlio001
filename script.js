/* ==============================================
   Gyagenda Peter Owns the code
   Code Therapist portfolio — script.js
   ============================================== */

/* ---- Intro: Code Therapist + dotted spinner, then homepage flow ---- */
(function () {
  const pre = document.getElementById('preloader');
  document.body.style.overflow = 'hidden';

  function ready() {
    if (pre) pre.classList.add('done');
    document.body.classList.remove('booting');
    document.body.classList.add('page-ready');
    document.body.style.overflow = '';
    window.dispatchEvent(new Event('ct-ready'));
  }

  setTimeout(ready, 2000);
})();

/* ---- Header scroll ---- */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ---- Mobile menu ---- */
const hamburger  = document.getElementById('hamburger');
const navMenu    = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function openMenu()  {
  if (!hamburger || !navMenu || !navOverlay) return;
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('open');
  navOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  if (!hamburger || !navMenu || !navOverlay) return;
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
  navOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

if (hamburger && navMenu && navOverlay) {
  hamburger.addEventListener('click', () => navMenu.classList.contains('open') ? closeMenu() : openMenu());
  navOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));
}

/* ---- Active nav on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 250) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}, { passive: true });

/* ---- Typewriter ---- */
const roles = ['Creative Developer.','Full-Stack Developer.','AI Agent Builder.','Unity Developer.'];
let rIdx = 0, cIdx = 0, deleting = false;
const twEl = document.getElementById('typed');
function typeLoop() {
  if (!twEl) return;
  const word = roles[rIdx];
  if (!deleting) {
    twEl.textContent = word.slice(0, ++cIdx);
    if (cIdx === word.length) { deleting = true; setTimeout(typeLoop, 2600); return; }
  } else {
    twEl.textContent = word.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 46 : 88);
}
window.addEventListener('ct-ready', () => setTimeout(typeLoop, 900), { once: true });

/* ---- Scroll Reveal ---- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const d = parseInt(entry.target.dataset.delay || 0, 10);
    setTimeout(() => {
      entry.target.classList.add('in');
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) fill.style.width = fill.dataset.w + '%';
    }, d);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => revealObs.observe(el));

/* ---- Counter Animation ---- */
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 2000;
  const steps    = 70;
  let step = 0;
  function easeOut(t) { return 1 - Math.pow(1 - t, 4); }
  const timer = setInterval(() => {
    step++;
    el.textContent = Math.round(easeOut(step / steps) * target) + suffix;
    if (step >= steps) { el.textContent = target + suffix; clearInterval(timer); }
  }, duration / steps);
}

let countersRun = false;
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersRun) {
      countersRun = true;
      setTimeout(() => {
        document.querySelectorAll('.stat-num[data-target]').forEach(el => animateCounter(el));
      }, 300);
      statsObs.disconnect();
    }
  });
}, { threshold: 0.3 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObs.observe(statsBar);

/* ---- Project Filter Tabs (single handler) ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projCards  = document.querySelectorAll('.proj-card');

// Default: show only frontend on load
projCards.forEach(card => {
  card.style.display = card.dataset.cat === 'frontend' ? '' : 'none';
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projCards.forEach(card => {
      card.style.display = card.dataset.cat === filter ? '' : 'none';
    });
  });
});

/* ---- Project cards open in new tab ---- */
projCards.forEach(card => {
  card.addEventListener('click', e => {
    const link = card.querySelector('.proj-view-btn');
    if (link && e.target !== link && !link.contains(e.target)) {
      const href = link.getAttribute('href');
      if (href && href !== '#') window.open(href, '_blank', 'noopener');
    }
  });
  card.style.cursor = 'pointer';
});

/* ---- Contact Form → Gmail as Byte@info ---- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const HIRE_GMAIL = 'codetherapist.pita@gmail.com';
const SITE_ORIGIN = 'https://codetherapist.netlify.app';
const CONTACT_GMAIL_HOOK = 'https://script.google.com/macros/s/AKfycbxyBLA93X9A1eQq_OHkWHHGE2MDtRwu6OakmtAMf7KX12T30DRQUtY707-2n5PBJbqPjA/exec';

const WHATSAPP_HIRE = '256762426842';

if (contactForm) {
  const whatsappSubmit = document.getElementById('whatsappSubmit');

  function formFields() {
    const data = new FormData(contactForm);
    return {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      subject: String(data.get('subject') || '').trim(),
      message: String(data.get('message') || '').trim(),
      honey: String(data.get('honey') || '').trim(),
      page: window.location.href,
      website: SITE_ORIGIN
    };
  }

  function openWhatsAppEnquiry() {
    if (!contactForm.reportValidity()) return;
    const fields = formFields();
    const text = [
      'CODE THERAPIST / Byte Lab enquiry',
      '',
      'Name: ' + fields.name,
      'Email: ' + fields.email,
      'Subject: ' + fields.subject,
      '',
      fields.message
    ].join('\n');
    window.open(
      'https://wa.me/' + WHATSAPP_HIRE + '?text=' + encodeURIComponent(text),
      '_blank',
      'noopener'
    );
  }

  if (whatsappSubmit) {
    whatsappSubmit.addEventListener('click', openWhatsAppEnquiry);
  }

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = contactForm.querySelector('.form-submit');
    const text = btn && btn.querySelector('.btn-text');
    if (!btn || !text) return;

    text.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.75';

    const payload = formFields();

    function markSent() {
      if (formSuccess) formSuccess.classList.add('show');
      contactForm.reset();
      text.textContent = 'Send to Gmail';
      btn.disabled = false;
      btn.style.opacity = '1';
      setTimeout(() => { if (formSuccess) formSuccess.classList.remove('show'); }, 6000);
    }

    function markFail() {
      text.textContent = 'Try Again';
      btn.disabled = false;
      btn.style.opacity = '1';
    }

    function postToGmail(fields) {
      return fetch(CONTACT_GMAIL_HOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(fields)
      }).then(() => true).catch(() => false);
    }

    try {
      if (location.hostname.indexOf('netlify') !== -1) {
        const netlify = new URLSearchParams(payload);
        netlify.set('form-name', 'hire-peter');
        netlify.set('bot-field', '');
        netlify.set('client_name', payload.name);
        netlify.set('client_email', payload.email);
        netlify.set('sent_from', 'Byte@info website contact form');
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlify.toString()
        }).catch(() => {});
      }

      const sent = await postToGmail(payload);
      if (sent) markSent();
      else markFail();
    } catch (err) {
      markFail();
    }
  });
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const sel = anchor.getAttribute('href');
    if (!sel || sel === '#') return;
    const target = document.querySelector(sel);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---- Testimonials: clone cards for infinite marquee ---- */
(function () {
  const track = document.getElementById('testiTrack');
  if (!track) return;
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
})();

/* ---- Theme picker (6 modes) ---- */
(function () {
  var html = document.documentElement;
  var wrap = document.querySelector('.theme-wrap');
  var btn  = document.getElementById('themeToggle');
  var panel = document.getElementById('themePanel');
  var MODES = ['dark', 'light', 'forest', 'aurora', 'premium', 'midnight'];
  if (!btn || !wrap || !panel) return;

  function applyTheme(name) {
    var theme = MODES.indexOf(name) !== -1 ? name : 'dark';
    html.setAttribute('data-theme', theme);
    html.classList.toggle('light', theme === 'light');
    try { localStorage.setItem('theme', theme); } catch (err) {}
    wrap.querySelectorAll('.theme-mode').forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-theme') === theme);
    });
    try {
      window.dispatchEvent(new CustomEvent('ct-theme', { detail: { theme: theme } }));
    } catch (err) {}
  }

  function openPanel() {
    wrap.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
  }
  function closePanel() {
    wrap.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
  }

  var saved = 'dark';
  try { saved = localStorage.getItem('theme') || 'dark'; } catch (err) {}
  applyTheme(saved);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    wrap.classList.contains('is-open') ? closePanel() : openPanel();
  });
  wrap.querySelectorAll('.theme-mode').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      applyTheme(el.getAttribute('data-theme'));
      closePanel();
    });
  });
  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target)) closePanel();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });
})();

/* ---- Logo scroll to top ---- */
(function () {
  document.querySelectorAll('.nav-logo, .footer-logo').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      var menu = document.getElementById('navMenu');
      var ham  = document.getElementById('hamburger');
      var ov   = document.getElementById('navOverlay');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        if (ham) ham.classList.remove('active');
        if (ov) ov.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });
})();

/* ---- Hero portrait slideshow ---- */
(function () {
  const frame = document.getElementById('heroSlider');
  if (!frame) return;
  const slides = Array.from(frame.querySelectorAll('.hero-photo'));
  const dots = Array.from(document.querySelectorAll('.hero-dots .hero-dot'));
  if (slides.length < 2) return;

  let index = 0;
  let timer;

  function show(next) {
    slides[index].classList.remove('is-active');
    if (dots[index]) dots[index].classList.remove('is-active');
    index = (next + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    if (dots[index]) dots[index].classList.add('is-active');
  }

  function start() {
    stop();
    timer = setInterval(() => show(index + 1), 4000);
  }

  function stop() {
    clearInterval(timer);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      start();
    });
  });

  frame.addEventListener('mouseenter', stop);
  frame.addEventListener('mouseleave', start);
  start();
})();
