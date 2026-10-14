# 55 — Gérer un état de requête

**Notion :** union discriminée et narrowing  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Définissez les états chargement, succès avec données et erreur avec message. Une fonction doit produire un texte pour chaque cas.

## Lancer

Lancez `npm install`, `npm run build`, puis `npm start`.

## Vérifier

2 résultat(s)

## Comprendre

Le champ statut discrimine les variantes. Chaque branche sait quelles propriétés existent, sans assertion de type.
