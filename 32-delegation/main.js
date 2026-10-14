
document.querySelector('#taches').addEventListener('click', event => {
  const bouton = event.target.closest('button');
  if (!bouton || !event.currentTarget.contains(bouton)) return;
  bouton.closest('li').remove();
});
