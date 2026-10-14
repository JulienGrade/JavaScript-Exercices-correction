type Etat = { statut: 'chargement' } | { statut: 'succes'; donnees: string[] } | { statut: 'erreur'; message: string };
function decrire(etat: Etat): string {
  switch (etat.statut) {
    case 'chargement': return 'Chargement';
    case 'succes': return `${etat.donnees.length} résultat(s)`;
    case 'erreur': return etat.message;
  }
}
console.log(decrire({ statut: 'succes', donnees: ['A', 'B'] }));
