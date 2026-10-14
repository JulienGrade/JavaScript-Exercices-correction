
document.querySelector('#envoyer').addEventListener('click', async () => {
  const etat = document.querySelector('#etat');
  try {
    const reponse = await fetch('/api/commande', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ produit: 'Casque' }) });
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const commande = await reponse.json();
    etat.textContent = `Commande ${commande.id} créée`;
  } catch (erreur) { etat.textContent = `Erreur : ${erreur.message}`; }
});
