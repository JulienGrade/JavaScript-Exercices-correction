const categories = ['Musique', 'Sport', 'Jeux'];
const liste = document.querySelector('#liste');
for (const categorie of categories) {
  const li = document.createElement('li');
  li.textContent = categorie;
  liste.append(li);
}
