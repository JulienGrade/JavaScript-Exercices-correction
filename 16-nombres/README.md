# 16 — Afficher un prix français

**Notion :** Intl.NumberFormat et arrondi  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Arrondissez 12,345 à deux décimales et formatez-le en euros pour la locale fr-FR.

## Lancer

Lancez `node main.js` depuis ce dossier.

## Vérifier

12,35 € (espacement selon environnement)

## Comprendre

L’arrondi travaille sur un nombre ; Intl.NumberFormat gère ensuite les conventions d’affichage françaises.
