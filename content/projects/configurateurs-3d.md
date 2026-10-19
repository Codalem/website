---
title: Configurateurs 3D
description: Des prototypes Three.js pour personnaliser des objets en 3D, directement dans le navigateur.
cover: /images/projects/configurateurs-3d/cover.jpg
owners:
  - name: Léo Tayot
    photo: /team/leo.webp
tags:
  - Configurateur
  - 3D
technologies:
  - Three.js
  - JavaScript
  - Vite
date: 2025-02-08
---

## Le projet

Voir un produit en photo, c'est bien. Le faire tourner sous tous les angles pendant qu'on le personnalise, c'est mieux. Avec ce projet, nous avons exploré le **rendu 3D en temps réel dans le navigateur** pour aller plus loin que les aperçus 2D de [Ivy](/projects/ivy).

Chaque prototype repose sur la même idée : un modèle 3D construit avec **Three.js**, sur lequel on applique des textures générées à la volée. Le texte, le logo ou le cadre choisis par l'utilisateur sont dessinés dans un canvas 2D, puis plaqués sur l'objet. Chaque modification est donc visible instantanément.

## Le bouchon de liège

*Février 2024*

Le premier prototype : un **bouchon de liège géant** personnalisable, posé sur une table de cuisine.

<figure class="flex flex-col items-center py-5">
  <img src="/images/projects/configurateurs-3d/wine-cork.jpg" alt="Bouchon de liège en 3D personnalisé avec du texte, un logo et un millésime" class="project-screenshot project-screenshot-wide" />
</figure>

- Une texture de liège réaliste, avec un texte et un logo imprimés sur le corps du bouchon
- Le millésime gravé sur le dessus, encadré d'un cercle
- Le choix de la disposition du texte, horizontale ou verticale
- Trois styles de cadre : aucun, simple ou double
- L'affichage du « BAT » (bon à tirer), pour voir à plat ce qui sera imprimé

## L'intégration dans Ivy

*Septembre 2024 à avril 2025*

Le bouchon est ensuite devenu un vrai configurateur dans Ivy : un **tabouret en liège** proposé en trois formats (classique 30 cm, tabouret 50 cm, table haute 110 cm). Il se personnalise étape par étape (texte, illustration, disposition, millésime, cadre) avec un prix calculé en direct. C'est ce qui a permis à Ivy de choisir, pour chaque produit, entre un aperçu 2D et un aperçu 3D.

<figure class="flex flex-col items-center py-5">
  <img src="/images/projects/ivy/wine-3d.jpg" alt="Le configurateur de tabouret en liège dans Ivy, avec ses étapes et l'aperçu 3D" class="project-screenshot project-screenshot-wide" />
</figure>

## Le panneau Minecraft

*Février 2025*

Le dernier prototype part d'une maquette : un **panneau en bois de Minecraft**, à personnaliser puis à commander en vrai.

<figure class="flex flex-col items-center py-5">
  <img src="/images/projects/configurateurs-3d/minecraft-mockup.jpg" alt="Maquette du configurateur de panneau Minecraft avec ses options de texture, texte et taille" class="project-screenshot project-screenshot-wide" />
  <figcaption class="text-sm italic pt-2">La maquette de départ.</figcaption>
</figure>

- Trois essences de bois : chêne, chêne noir et acacia
- Quatre lignes de texte écrites avec la police de Minecraft
- Trois tailles réelles : 24 × 12 cm, 36 × 18 cm et 56 × 28 cm
- Un poteau qui s'affiche ou se masque
- Trois arrière-plans, dont un décor tiré du jeu
- Une caméra libre pour tourner autour du panneau, et des **bruitages** du jeu à chaque modification

<figure class="flex flex-col items-center py-5">
  <img src="/images/projects/configurateurs-3d/minecraft-app.jpg" alt="Le configurateur de panneau Minecraft terminé, avec un panneau personnalisé sur un décor du jeu" class="project-screenshot project-screenshot-wide" />
  <figcaption class="text-sm italic pt-2">Le configurateur terminé.</figcaption>
</figure>

## Ce que nous en retenons

La 3D dans le navigateur est aujourd'hui accessible et performante. Avec quelques textures et un canvas 2D, on peut obtenir un aperçu fidèle et ludique du produit. Le plus difficile n'est pas le rendu : c'est de penser des interactions simples, qui donnent envie de jouer avec le produit.
