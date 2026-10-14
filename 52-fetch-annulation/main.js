
let controleur;
const etat = document.querySelector('#etat');
document.querySelector('#charger').addEventListener('click', async () => {
  controleur?.abort();
  controleur = new AbortController();
  etat.textContent = 'Chargement…';
  try {
    const reponse = await fetch('/api/produits?delai=1', { signal: controleur.signal });
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    etat.textContent = `${(await reponse.json()).length} produits`;
  } catch (erreur) { etat.textContent = erreur.name === 'AbortError' ? 'Chargement annulé' : `Erreur : ${erreur.message}`; }
});
document.querySelector('#annuler').addEventListener('click', () => controleur?.abort());
