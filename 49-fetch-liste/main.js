
document.querySelector('#charger').addEventListener('click', async () => {
  const liste = document.querySelector('#liste');
  const etat = document.querySelector('#etat');
  etat.textContent = 'Chargement…';
  try {
    const reponse = await fetch('/api/produits');
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const produits = await reponse.json();
    liste.replaceChildren();
    for (const produit of produits) { const li = document.createElement('li'); li.textContent = produit.nom; liste.append(li); }
    etat.textContent = '';
  } catch (erreur) { etat.textContent = `Erreur : ${erreur.message}`; }
});
