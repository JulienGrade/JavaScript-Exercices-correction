const favoris = new Set();
const identifiant = 42;
const bouton = document.querySelector('#favori');
const sortie = document.querySelector('#nombre');
bouton.addEventListener('click', () => {
  if (favoris.has(identifiant)) favoris.delete(identifiant);
  else favoris.add(identifiant);
  bouton.setAttribute('aria-pressed', String(favoris.has(identifiant)));
  sortie.textContent = String(favoris.size);
});
