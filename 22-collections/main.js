const categories = ['jeu', 'musique', 'jeu'];
const uniques = [...new Set(categories)];
const compteurs = new Map();
for (const categorie of categories) compteurs.set(categorie, (compteurs.get(categorie) ?? 0) + 1);
console.log(uniques, compteurs.get('jeu'));
