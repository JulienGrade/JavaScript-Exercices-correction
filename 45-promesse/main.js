const attendre = new Promise(resolve => setTimeout(() => resolve('prêt'), 100));
attendre.then(resultat => console.log(resultat)).catch(erreur => console.error(erreur));
