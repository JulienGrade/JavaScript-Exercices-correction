# 51 — Envoyer une commande

**Notion :** POST, JSON.stringify, en-tête HTTP  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Envoyez {produit: « Casque »} à /api/commande en POST avec Content-Type application/json ; vérifiez le statut puis affichez l’identifiant reçu.

## Lancer

Lancez `node server.mjs` puis ouvrez `http://localhost:8765`.

## Vérifier

Commande 7 créée.

## Comprendre

Le corps JSON est sérialisé avec JSON.stringify et annoncé par Content-Type. Le code attend puis vérifie la réponse HTTP.
