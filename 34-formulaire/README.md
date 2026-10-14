# 34 — Valider une inscription

**Notion :** submit, preventDefault, FormData  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Empêchez le rechargement ; vérifiez que le pseudo a au moins 3 caractères ; affichez une erreur ou une confirmation.

## Lancer

Ouvrez index.html par double-clic dans un navigateur.

## Vérifier

« Al » donne une erreur ; « Alex » confirme.

## Comprendre

preventDefault empêche l’envoi natif. FormData lit le champ par son attribut name ; le message montre le résultat de la validation.
