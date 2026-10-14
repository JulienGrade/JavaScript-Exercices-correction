const messages = [];
const liste = document.querySelector('#messages');
function afficherMessages(valeurs) {
  liste.replaceChildren();
  if (valeurs.length === 0) { const li = document.createElement('li'); li.textContent = 'Aucun message'; liste.append(li); return; }
  for (const valeur of valeurs) { const li = document.createElement('li'); li.textContent = valeur; liste.append(li); }
}
afficherMessages(messages);
