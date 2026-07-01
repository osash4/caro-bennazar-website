(() => {
  const pills = document.querySelectorAll('.cb-pill');
  const products = document.querySelectorAll('.cb-prod');
  if (!pills.length) return;

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const cat = pill.dataset.cat;
      products.forEach((prod) => {
        prod.style.display = (cat === 'ALL' || prod.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
})();
