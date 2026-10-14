const produits = [{ nom: 'Casque', prix: 40, stock: 2 }, { nom: 'Micro', prix: 30, stock: 0 }];
const conteneur = document.querySelector('#cartes');
const disponibles = produits.filter(produit => produit.stock > 0);
if (disponibles.length === 0) conteneur.textContent = 'Aucun produit disponible';
for (const produit of disponibles) {
  const carte = document.createElement('article');
  const titre = document.createElement('h2');
  const prix = document.createElement('p');
  titre.textContent = produit.nom;
  prix.textContent = `${produit.prix} €`;
  carte.append(titre, prix);
  conteneur.append(carte);
}
