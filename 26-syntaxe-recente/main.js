const utilisateur = { stats: { points: 0 } };
console.log(utilisateur.profil?.pseudo ?? 'Anonyme', utilisateur.stats?.points ?? 10);
