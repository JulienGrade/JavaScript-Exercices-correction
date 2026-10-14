# 03 — Lire une quantité saisie

**Notion :** Number, Number.isNaN, égalité stricte  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Convertissez la chaîne en nombre. Affichez « Quantité invalide » si ce n’est pas un nombre entier positif ; sinon son double.

## Lancer

Lancez `node main.js` depuis ce dossier.

## Vérifier

14

## Comprendre

Number convertit la saisie. Number.isInteger évite d’accepter une quantité décimale ou NaN ; la comparaison écarte zéro et les nombres négatifs.
