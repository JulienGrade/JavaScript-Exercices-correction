
let theme = localStorage.getItem('theme') === 'sombre' ? 'sombre' : 'clair';
const sortie = document.querySelector('#theme');
function afficher() { sortie.textContent = theme; document.body.dataset.theme = theme; }
document.querySelector('#changer').addEventListener('click', () => {
  theme = theme === 'clair' ? 'sombre' : 'clair';
  localStorage.setItem('theme', theme);
  afficher();
});
afficher();
