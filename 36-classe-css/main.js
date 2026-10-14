
const bouton = document.querySelector('#basculer');
const panneau = document.querySelector('#panneau');
bouton.addEventListener('click', () => {
  panneau.hidden = !panneau.hidden;
  bouton.setAttribute('aria-expanded', String(!panneau.hidden));
});
