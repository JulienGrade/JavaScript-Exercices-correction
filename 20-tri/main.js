const produits = [{ nom: 'A', prix: 30 }, { nom: 'B', prix: 10 }];
const tries = [...produits].sort((a, b) => a.prix - b.prix);
console.log(tries.map(p => p.nom), produits.map(p => p.nom));
