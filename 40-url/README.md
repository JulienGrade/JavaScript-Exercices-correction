# 40 — Lire un filtre dans l’URL

**Notion :** URLSearchParams, DOM  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Lisez le paramètre categorie et affichez-le ; en son absence, affichez « Toutes ». Testez ?categorie=musique.

## Lancer

Ouvrez index.html par double-clic dans un navigateur.

## Vérifier

Avec ?categorie=musique, la page affiche musique.

## Comprendre

URLSearchParams lit le paramètre depuis l’adresse actuelle. La valeur de secours s’affiche si le paramètre manque.
