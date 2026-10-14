let score = 0;
const sortie = document.querySelector('#score');
document.querySelector('#ajouter').addEventListener('click', () => {
  score += 1;
  sortie.textContent = String(score);
});
