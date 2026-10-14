const dateISO = '2026-10-12T12:00:00Z';
const texte = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(dateISO));
const balise = document.querySelector('#date');
balise.dateTime = dateISO;
balise.textContent = texte;
