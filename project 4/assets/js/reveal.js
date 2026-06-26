(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('cb-in'); });
  }, { threshold: 0.14 });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
})();
