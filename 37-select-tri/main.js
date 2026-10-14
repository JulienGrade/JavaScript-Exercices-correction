const produits = [{ nom: 'A', prix: 30 }, { nom: 'B', prix: 10 }, { nom: 'C', prix: 20 }];
const select = document.querySelector('#ordre');
const liste = document.querySelector('#liste');
function afficher() {
  liste.replaceChildren();
  const sens = select.value === 'asc' ? 1 : -1;
  const tries = [...produits].sort((a, b) => sens * (a.prix - b.prix));
  for (const produit of tries) { const li = document.createElement('li'); li.textContent = `${produit.nom} : ${produit.prix} €`; liste.append(li); }
}
select.addEventListener('change', afficher);
afficher();
