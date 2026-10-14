# 58 — Tester une règle métier

**Notion :** node:test, assertions, cas limites  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Correction et explication

Implémentez calculerTotal(prix, quantite). Le calcul doit refuser les nombres négatifs et les valeurs non finies avec RangeError. Exécutez les tests fournis et complétez-en un pour la quantité zéro.

## Lancer

Lancez `node --test`.

## Vérifier

Les quatre tests passent avec node --test.

## Comprendre

Les assertions couvrent un calcul habituel et plusieurs limites. Le test pour zéro distingue cette valeur valide d’un nombre négatif.
