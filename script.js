const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navBackdrop = document.querySelector('.nav-backdrop');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.mainnav a');

function closeNav() {
  body.classList.remove('nav-open');

  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

function openNav() {
  body.classList.add('nav-open');

  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'true');
  }
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = body.classList.contains('nav-open');
    isOpen ? closeNav() : openNav();
  });
}

if (navBackdrop) {
  navBackdrop.addEventListener('click', closeNav);
}

if (navClose) {
  navClose.addEventListener('click', closeNav);
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    closeNav();
  }
});
