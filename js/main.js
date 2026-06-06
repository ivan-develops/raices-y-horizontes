/* =========================================
   RAÍCES Y HORIZONTES — JavaScript
   ========================================= */
(function () {
  'use strict';

  /* ── Nav scroll behaviour ── */
  const nav = document.querySelector('.nav');
  const navLogo = document.querySelector('.nav__logo');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    // Hide nav on fast scroll down (> 400px), show on scroll up
    if (y > lastScroll + 5 && y > 400) {
      nav.style.transform = 'translateY(-100%)';
    } else if (y < lastScroll - 5) {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = y;
  }, { passive: true });

  /* ── Mobile menu ── */
  const menuBtn = document.querySelector('.nav__menu-btn');
  const mobileMenu = document.querySelector('.nav__mobile');
  let menuOpen = false;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.style.display = menuOpen ? 'flex' : 'none';
      requestAnimationFrame(() => {
        mobileMenu.classList.toggle('open', menuOpen);
      });
      menuBtn.querySelectorAll('span')[0].style.transform = menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
      menuBtn.querySelectorAll('span')[1].style.opacity = menuOpen ? '0' : '1';
      menuBtn.querySelectorAll('span')[2].style.transform = menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.style.display = 'none';
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        menuBtn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
      });
    });
  }

  /* ── Hero bg load ── */
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    const tempImg = new Image();
    tempImg.onload = () => heroBg.classList.add('loaded');
    tempImg.src = heroBg.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
    // Fallback
    setTimeout(() => heroBg.classList.add('loaded'), 200);
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ── Portfolio filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio__item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;

      portfolioItems.forEach((item, i) => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.transition = `opacity 0.4s ${i * 0.03}s, transform 0.4s ${i * 0.03}s`;
        if (show) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
          item.style.display = '';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => {
            if (btn.dataset.filter !== 'all' && item.dataset.category !== btn.dataset.filter) {
              item.style.display = 'none';
            }
          }, 380);
        }
      });
    });
  });

  /* ── Lightbox ── */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (lightbox && lightboxImg) {
    portfolioItems.forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img')?.src;
        const alt = item.querySelector('img')?.alt || '';
        if (src) {
          lightboxImg.src = src;
          lightboxImg.alt = alt;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lightbox__close')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Testimonials slider ── */
  const track = document.querySelector('.testimonials__track');
  const dots = document.querySelectorAll('.testimonials__dot');
  let current = 0;
  let interval;

  function goTo(idx) {
    const cards = document.querySelectorAll('.testimonial-card');
    if (!track || !cards.length) return;
    current = (idx + cards.length) % cards.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  if (track) {
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetInterval(); }));
    function resetInterval() { clearInterval(interval); interval = setInterval(() => goTo(current + 1), 5000); }
    resetInterval();
  }

  /* ── FAQ accordion ── */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq__question');
    const a = item.querySelector('.faq__answer');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq__answer').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 32 + 'px';
      }
    });
  });

  /* ── Contact form ── */
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.querySelector('.form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;

      // Simulate send (replace with real endpoint)
      setTimeout(() => {
        contactForm.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
      }, 1400);
    });
  }

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Stat counter animation ── */
  function animateCount(el, target, duration = 1800) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.about__stat-num[data-count]');
  if (statNums.length && 'IntersectionObserver' in window) {
    const statsIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          animateCount(el, parseInt(el.dataset.count, 10));
          statsIO.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(el => statsIO.observe(el));
  }

  /* ── Parallax hero ── */
  const heroBgEl = document.querySelector('.hero__bg');
  if (heroBgEl) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBgEl.style.transform = `translateY(${y * 0.25}px)`;
      }
    }, { passive: true });
  }

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (link) {
        const inView = scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight;
        link.style.color = inView && !nav.classList.contains('scrolled')
          ? 'var(--cream)' : '';
      }
    });
  }, { passive: true });

})();
