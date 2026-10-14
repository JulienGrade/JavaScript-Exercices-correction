const nom = Promise.resolve('Maya');
const score = Promise.resolve(42);
Promise.all([nom, score]).then(([n, s]) => console.log(n, s));
