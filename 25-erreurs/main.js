function verifierAge(age) {
  if (typeof age !== 'number') throw new TypeError('Âge numérique attendu');
  if (age < 0) throw new RangeError('Âge négatif');
  return age;
}
try { console.log(verifierAge(-2)); } catch (erreur) { console.log(erreur.message); }
