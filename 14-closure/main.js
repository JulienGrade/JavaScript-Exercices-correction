function creerCompteur() {
  let valeur = 0;
  return () => ++valeur;
}
const a = creerCompteur();
const b = creerCompteur();
console.log(a(), a(), b());
