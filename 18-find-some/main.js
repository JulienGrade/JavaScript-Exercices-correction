const produits = [{ id: 1, prix: 20 }, { id: 2, prix: 80 }];
console.log(produits.find(produit => produit.id === 2));
console.log(produits.some(produit => produit.prix > 50));
