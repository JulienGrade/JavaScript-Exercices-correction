# 25 — Gérer une donnée incorrecte

**Notion :** throw, try/catch, message d’erreur  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Écrivez verifierAge(age) : lancez une TypeError pour une valeur non numérique et une RangeError pour un âge négatif ; attrapez l’erreur pour -2.

## Lancer

Lancez `node main.js` depuis ce dossier.

## Vérifier

Âge négatif

## Comprendre

throw signale un cas invalide avec un type d’erreur explicite. try/catch récupère l’erreur au point d’appel.
