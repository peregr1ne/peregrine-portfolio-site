// simple timeout animation for servicecard

const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => card.classList.add('visible'), index * 200);
        });
        observer.disconnect(); // animation played only once
      }
    });
  }, { threshold: 0.2 });

  observer.observe(document.querySelector('.services-card-container'));