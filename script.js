document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          nav.classList.remove('open');
        }
      }
    });
  });

  // Client-side validation for the contact form
  const form = document.getElementById('contactForm');
  if (form) {
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset custom validation messages
      nameInput.setCustomValidity('');
      messageInput.setCustomValidity('');

      // Basic validation rules
      if (nameInput.value.trim().length < 2) {
        nameInput.setCustomValidity('Please enter at least 2 characters for your name.');
      }

      if (messageInput.value.trim().length < 10) {
        messageInput.setCustomValidity('Message should be at least 10 characters long.');
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      alert('Thank you for contacting us!');
      form.reset();
    });
  }

  // Simple image lightbox for gallery/testimonial sections
  const lightboxImages = document.querySelectorAll('[data-lightbox]');
  if (lightboxImages.length) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightboxImages.forEach((img) => {
      img.addEventListener('click', (e) => {
        e.preventDefault();
        lightbox.innerHTML = '';
        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        lightbox.appendChild(imgClone);
        lightbox.classList.add('active');
      });
    });
  }
});
