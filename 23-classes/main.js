class Carte {
  constructor(nom, puissance) { this.nom = nom; this.puissance = puissance; }
  decrire() { return `${this.nom} (${this.puissance})`; }
}
console.log(new Carte('Éclair', 5).decrire());
