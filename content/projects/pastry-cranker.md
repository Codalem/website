---
title: Pastry Cranker
description: A chill idle game about pastries. The more you bake, the more you can unlock.
cover: /images/projects/pastry-cranker/cover.jpg
owners:
  - name: Léo Tayot
    photo: /team/leo.webp
link: https://play.date/games/pastry-cranker/
linkLabel: Voir sur Playdate
tags:
  - Jeu vidéo
  - Playdate
technologies:
  - Lua
  - SDK Playdate
publishedAt: "07/08/2025"
date: 2025-07-08
---

## Le projet

**Pastry Cranker** est un petit jeu *idle* et relaxant sur le thème de la pâtisserie, conçu pour la console [Playdate](https://play.date){target="_blank"}.

<div class="flex flex-wrap justify-center items-end gap-10 py-5">
  <figure class="flex flex-col items-center">
    <img src="/images/projects/pastry-cranker/playdate.png" alt="La console Playdate, jaune, avec sa manivelle dépliée" class="project-photo" />
    <figcaption class="text-sm italic pt-2">La console Playdate et sa manivelle. Photo : Panic Inc.</figcaption>
  </figure>
  <figure class="flex flex-col items-center">
    <img src="/images/projects/pastry-cranker/playdate-pastry-cranker.jpg" alt="Une Playdate tenue en main affichant l'écran titre de Pastry Cranker, dans un parc devant des gratte-ciel" class="project-photo rounded-lg" />
    <figcaption class="text-sm italic pt-2">Pastry Cranker sur une vraie Playdate.</figcaption>
  </figure>
</div>

### La console Playdate

La Playdate est une console portable conçue par Panic, avec un design signé Teenage Engineering. Elle tient dans la poche et se distingue par sa **manivelle** : un contrôleur analogique qui se déplie sur le côté de la console.

- **Écran** : 400 × 240 pixels, 1 bit (noir et blanc), réfléchissant et sans rétroéclairage
- **Processeur** : Cortex M7 à 168 MHz
- **Mémoire** : 16 Mo de RAM, 8 Ko de cache L1, 4 Go de stockage flash
- **Commandes** : croix directionnelle, boutons A et B, accéléromètre 3 axes et manivelle
- **Son** : haut-parleur mono, prise casque stéréo et micro intégré
- **Connectivité** : Wi-Fi 2,4 GHz
- **Autonomie** : 8 heures en jeu, 14 jours en veille
- **Dimensions** : 76 × 74 × 9 mm

### Les contraintes techniques

- **Un écran 1 bit** : chaque pixel est soit noir, soit blanc. Toutes les nuances, ombres et textures des pâtisseries passent par le dessin au trait et le tramage (*dithering*).
- **Une petite résolution** : en 400 × 240 pixels, chaque élément de l'interface doit rester lisible et trouver sa place à l'écran.
- **Peu de mémoire** : avec 16 Mo de RAM, images, animations et sons doivent être optimisés et chargés avec soin.
- **Une puissance limitée** : la logique du jeu et les animations doivent tenir dans le budget d'un processeur à 168 MHz pour rester fluides.
- **La manivelle** : au cœur du gameplay, elle impose de penser des interactions originales, au-delà des boutons classiques.

# Description du jeu

> C'est tellement gentil de rendre visite à votre grand-mère pendant les vacances, et encore plus de proposer votre aide à la pâtisserie familiale. Avec un peu de régularité, vous pourrez peut-être compléter **votre propre livre de recettes** ! Mais pas d'inquiétude, vous ne ferez pas tout le travail seul…

<div class="flex flex-wrap justify-center gap-5 py-5">
  <img src="/images/projects/pastry-cranker/baking.gif" alt="Cuisson des pâtisseries à la manivelle" class="project-screenshot project-screenshot-pixel" />
  <img src="/images/projects/pastry-cranker/discover.gif" alt="Découverte d'une nouvelle recette : le muffin" class="project-screenshot project-screenshot-pixel" />
  <img src="/images/projects/pastry-cranker/achievements.png" alt="Écran des succès" class="project-screenshot project-screenshot-pixel" />
</div>

Rien de bien compliqué : il suffit de tourner la manivelle pour cuisiner !

Tournez la manivelle pour cuire des pâtisseries, puis utilisez-les pour débloquer de nouvelles recettes. Chaque recette améliore votre boulangerie : cuisson plus rapide, améliorations utiles, progression hors ligne, et bien plus encore.

Disponible en **anglais**, **français**, **allemand** et **tagalog**.

## L'équipe

- **Léo Tayot** : direction, conception, développement, graphismes, bande son, images, marketing
- [Bubble_guux](https://www.instagram.com/bubble_guux/){target="_blank"} : images de pâtisseries
- [Marianne_arts](https://www.instagram.com/marianne_arts00/){target="_blank"} : images web et couverture du jeu
