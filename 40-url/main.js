
const params = new URLSearchParams(window.location.search);
document.querySelector('#categorie').textContent = params.get('categorie') || 'Toutes';
