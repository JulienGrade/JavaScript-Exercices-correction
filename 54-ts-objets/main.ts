type Produit = { id: number; nom: string; description?: string };
function afficherProduit(produit: Produit): string { return `${produit.nom} : ${produit.description ?? 'Sans description'}`; }
console.log(afficherProduit({ id: 1, nom: 'Casque' }));
