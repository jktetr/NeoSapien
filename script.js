const productVideo = document.getElementById('productVideo');
const finishName = document.getElementById('finishName');
const finishButtons = document.querySelectorAll('.finish-btn');

finishButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const video = button.dataset.video;
    const name = button.dataset.name;

    finishButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    if (productVideo && video) {
      const source = productVideo.querySelector('source');
      source.src = video;
      productVideo.load();
      productVideo.play().catch(() => {});
    }

    if (finishName && name) {
      finishName.textContent = name;
    }
  });
});

const toggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
});
