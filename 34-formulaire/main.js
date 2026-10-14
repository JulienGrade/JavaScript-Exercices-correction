
document.querySelector('#formulaire').addEventListener('submit', event => {
  event.preventDefault();
  const pseudo = String(new FormData(event.currentTarget).get('pseudo') ?? '').trim();
  document.querySelector('#message').textContent = pseudo.length < 3 ? 'Au moins 3 caractères' : `Bienvenue ${pseudo}`;
});
