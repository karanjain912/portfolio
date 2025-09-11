document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website loaded!');

  const elements = document.querySelectorAll('.fade-in, .slide-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
