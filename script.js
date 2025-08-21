document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    form.reset();
  });
});
