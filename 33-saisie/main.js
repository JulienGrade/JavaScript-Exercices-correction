const noms = ['Maya', 'Noa', 'Lina'];
const saisie = document.querySelector('#recherche');
const liste = document.querySelector('#resultats');
function afficher() {
  liste.replaceChildren();
  const resultat = noms.filter(nom => nom.toLowerCase().includes(saisie.value.trim().toLowerCase()));
  if (resultat.length === 0) { liste.textContent = 'Aucun résultat'; return; }
  for (const nom of resultat) { const li = document.createElement('li'); li.textContent = nom; liste.append(li); }
}
saisie.addEventListener('input', afficher);
afficher();
