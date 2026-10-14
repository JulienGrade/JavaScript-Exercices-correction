
document.querySelector('#charger').addEventListener('click', async () => {
  const etat = document.querySelector('#etat');
  try {
    const reponse = await fetch('/api/produits?erreur=1');
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    etat.textContent = JSON.stringify(await reponse.json());
  } catch (erreur) { etat.textContent = `Erreur ${erreur.message}`; }
});
