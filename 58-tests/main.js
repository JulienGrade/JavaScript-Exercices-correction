export function calculerTotal(prix, quantite) {
  if (![prix, quantite].every(Number.isFinite) || prix < 0 || quantite < 0) {
    throw new RangeError('Valeurs invalides');
  }
  return prix * quantite;
}
