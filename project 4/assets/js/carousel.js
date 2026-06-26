(() => {
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const slides = [...root.querySelectorAll('[data-slide]')];
    const dots = [...root.querySelectorAll('[data-dot]')];

    if (slides.length <= 1) {
      root.querySelectorAll('[data-prev],[data-next]').forEach((b) => b.style.display = 'none');
      dots.forEach((d) => d.style.display = 'none');
      return;
    }

    let i = 0;
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
      dots.forEach((d, idx) => d.classList.toggle('is-active', idx === i));
    };

    root.querySelector('[data-prev]').addEventListener('click', () => show(i - 1));
    root.querySelector('[data-next]').addEventListener('click', () => show(i + 1));
    dots.forEach((d, idx) => d.addEventListener('click', () => show(idx)));

    setInterval(() => show(i + 1), 5500);
  });
})();
