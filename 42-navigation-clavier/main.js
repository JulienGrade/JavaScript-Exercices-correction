
const bouton = document.querySelector('#ouvrir');
const panneau = document.querySelector('#panneau');
bouton.addEventListener('click', () => { panneau.hidden = false; panneau.querySelector('a').focus(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !panneau.hidden) { panneau.hidden = true; bouton.focus(); }
});
