function attendreNom() { return Promise.resolve('Maya'); }
async function afficher() {
  try { console.log(await attendreNom()); } catch (erreur) { console.error(erreur); }
}
afficher();
