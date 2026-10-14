
const accord = document.querySelector('#accord');
const bouton = document.querySelector('#confirmer');
accord.addEventListener('change', () => { bouton.disabled = !accord.checked; });
