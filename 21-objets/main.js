const profil = { nom: 'Maya', role: 'membre' };
const { nom, ville = 'Inconnue' } = profil;
const admin = { ...profil, role: 'admin' };
console.log(nom, ville, admin, profil.role);
