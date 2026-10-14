const statut = 'expédie';
let libelle;
switch (statut) {
  case 'nouveau': libelle = 'À préparer'; break;
  case 'expédie': libelle = 'En livraison'; break;
  case 'livré': libelle = 'Terminé'; break;
  default: libelle = 'Statut inconnu';
}
console.log(libelle);
