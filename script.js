/* ---- Welcome Screen — Yassin style ---- */
(function () {
  const screen = document.getElementById('welcomeScreen');
  const btn    = document.getElementById('wcEnter');
  if (!screen) return;

  // lock scroll
  document.body.style.overflow = 'hidden';

  function dismiss() {
    screen.classList.add('wc-exit');
    document.body.style.overflow = '';
    setTimeout(() => {
      screen.style.display = 'none';
    }, 750);
  }

  // click button to enter
  btn.addEventListener('click', dismiss);

  // also auto-dismiss after 6 seconds if they don't click
  setTimeout(dismiss, 4500);
})();



/* ---- Preloader ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 2200);
});

/* ---- Custom Cursor ---- */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = (mx - 5) + 'px';
  cursor.style.top  = (my - 5) + 'px';
});
(function loopTrail() {
  tx += (mx - tx) * 0.14;
  ty += (my - ty) * 0.14;
  trail.style.left = (tx - 17) + 'px';
  trail.style.top  = (ty - 17) + 'px';
  requestAnimationFrame(loopTrail);
})();
document.querySelectorAll('a,button,.proj-card,.tool-card,.stat-item,.info-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.5)';
    trail.style.transform  = 'scale(1.5)';
    trail.style.opacity    = '0.7';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    trail.style.transform  = 'scale(1)';
    trail.style.opacity    = '0.45';
  });
});

/* ---- Header scroll ---- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ---- Mobile menu ---- */
const hamburger  = document.getElementById('hamburger');
const navMenu    = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function openMenu()  { hamburger.classList.add('active'); navMenu.classList.add('open'); navOverlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeMenu() { hamburger.classList.remove('active'); navMenu.classList.remove('open'); navOverlay.classList.remove('show'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', () => navMenu.classList.contains('open') ? closeMenu() : openMenu());
navOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));

/* ---- Active nav on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 250) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}, { passive: true });

/* ---- Typewriter ---- */
const roles = ['Frontend Developer.','Shopify Developer.','WordPress Developer.','UI/UX Designer.'];
let rIdx = 0, cIdx = 0, deleting = false;
const twEl = document.getElementById('typed');
function typeLoop() {
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
setTimeout(typeLoop, 2500); // wait for preloader

/* ---- Scroll Reveal ---- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const d = parseInt(entry.target.dataset.delay || 0);
    setTimeout(() => {
      entry.target.classList.add('in');
      // skill fill bars
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

/* ---- Project Filter Tabs ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projCards  = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden');
        // re-trigger reveal if needed
        card.style.opacity = '';
        card.style.transform = '';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ---- Project cards open in new tab ---- */
projCards.forEach(card => {
  card.addEventListener('click', e => {
    // only if not clicking the link button directly
    const link = card.querySelector('.proj-view-btn');
    if (link && e.target !== link && !link.contains(e.target)) {
      const href = link.getAttribute('href');
      if (href && href !== '#') window.open(href, '_blank', 'noopener');
    }
  });
  // pointer cursor feel
  card.style.cursor = 'pointer';
});

/* ---- Contact Form (Formspree) ---- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = contactForm.querySelector('.form-submit');
    const text = btn.querySelector('.btn-text');

    // loading state
    text.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.75';

    const data = new FormData(contactForm);

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        // success
        formSuccess.classList.add('show');
        contactForm.reset();
        text.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.opacity = '1';
        setTimeout(() => formSuccess.classList.remove('show'), 6000);
      } else {
        // server error
        const json = await res.json();
        const msg = json.errors ? json.errors.map(e => e.message).join(', ') : 'Something went wrong.';
        text.textContent = 'Try Again';
        btn.disabled = false;
        btn.style.opacity = '1';
        alert('Error: ' + msg);
      }
    } catch (err) {
      text.textContent = 'Try Again';
      btn.disabled = false;
      btn.style.opacity = '1';
      alert('Network error — please email me directly at thescalepeedia@gmail.com');
    }
  });
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
/* ---- Testimonials: clone cards for infinite marquee ---- */
(function() {
  const track = document.getElementById('testiTrack');
  if (!track) return;
  // clone all cards and append so the animation loops seamlessly
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
})();

/* ---- Project filter — updated for portfolio category ---- */
const filterBtns2 = document.querySelectorAll('.filter-btn');
const projCards2  = document.querySelectorAll('.proj-card');

// default: show only frontend on load
projCards2.forEach(card => {
  card.style.display = card.dataset.cat === 'frontend' ? '' : 'none';
});

filterBtns2.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns2.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projCards2.forEach(card => {
      card.style.display = card.dataset.cat === filter ? '' : 'none';
    });
  });
});

/* ---- Theme Toggle ---- */
(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('themeToggle');
  if (!btn) return;

  // restore saved preference
  if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light');
  }

  btn.addEventListener('click', function () {
    html.classList.toggle('light');
    localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
  });
})();

/* ---- Logo scroll to top ---- */
(function () {
  document.querySelectorAll('.nav-logo, .footer-logo').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // close mobile menu if open
      var menu = document.getElementById('navMenu');
      var ham  = document.getElementById('hamburger');
      var ov   = document.getElementById('navOverlay');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        ham && ham.classList.remove('active');
        ov  && ov.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });
})();