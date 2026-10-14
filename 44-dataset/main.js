
document.querySelector('#filtres').addEventListener('click', event => {
  const bouton = event.target.closest('button[data-categorie]');
  if (!bouton || !event.currentTarget.contains(bouton)) return;
  document.querySelector('#choix').textContent = bouton.dataset.categorie;
});
