const reglages = { theme: 'sombre', langue: 'fr' };
for (const cle in reglages) {
  if (Object.hasOwn(reglages, cle)) console.log(`${cle}: ${reglages[cle]}`);
}
