const appels = [Promise.resolve('A'), Promise.reject(new Error('Indisponible'))];
Promise.allSettled(appels).then(resultats => {
  for (const resultat of resultats) if (resultat.status === 'fulfilled') console.log(resultat.value);
});
