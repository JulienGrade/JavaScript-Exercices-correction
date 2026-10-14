const valeur: unknown = JSON.parse('{"nom":"Maya"}');
function estPersonne(donnee: unknown): donnee is { nom: string } {
  return typeof donnee === 'object' && donnee !== null && 'nom' in donnee && typeof donnee.nom === 'string';
}
console.log(estPersonne(valeur) ? valeur.nom : 'Donnée invalide');
