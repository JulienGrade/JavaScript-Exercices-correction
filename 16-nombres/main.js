const prix = 12.345;
const arrondi = Math.round((prix + Number.EPSILON) * 100) / 100;
console.log(new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(arrondi));
