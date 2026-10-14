# 43 — Gérer un état vide

**Notion :** fonction de rendu, DOM  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Rendez la liste de messages ; si elle est vide, affichez « Aucun message ». Testez aussi avec un tableau contenant un élément.

## Lancer

Ouvrez index.html par double-clic dans un navigateur.

## Vérifier

Un message vide explicite apparaît.

## Comprendre

replaceChildren évite d’empiler plusieurs rendus. Le cas vide est une branche explicite du rendu.
