# 49 — Charger un catalogue

**Notion :** fetch, response.ok, json  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Cliquez sur Charger ; demandez /api/produits, vérifiez response.ok, lisez le JSON et affichez les deux noms comme du texte. Gérez une erreur.

## Lancer

Lancez `node server.mjs` puis ouvrez `http://localhost:8765`.

## Vérifier

Casque et Micro apparaissent après le clic.

## Comprendre

fetch donne une Response ; il faut vérifier ok avant de lire le JSON. Le rendu transforme chaque donnée en nœud texte.
