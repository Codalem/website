---
title: Ivy
description: Notre moteur de configurateurs de produits en ligne, avec visualisation en temps réel, prix dynamique et commandes simplifiées.
cover: /images/projects/ivy/cover.jpg
owners:
  - name: Eddie Vallier
    photo: /team/eddie.webp
  - name: Maxim Audren
    photo: /team/maxim.webp
  - name: Léo Tayot
    photo: /team/leo.webp
tags:
  - Configurateur
  - E-commerce
technologies:
  - Nuxt
  - Vuetify
  - Three.js
  - Python
  - FastAPI
  - Docker
date: 2023-08-15
---

## Le projet

**Ivy** a été le premier produit de Codalem : une solution de **conception d'outils de configuration en ligne**. Elle s'adressait aux entreprises qui vendent des produits personnalisés ou configurables, et leur permettait de proposer un configurateur **simple** et **efficace**, à leur image, directement sur leur site web.

Pendant deux ans, Ivy a occupé tout notre site. Le produit n'a pas trouvé son marché, et c'est de là qu'est né le Codalem d'aujourd'hui : un bac à sable où nous lançons des projets variés. Mais Ivy reste le projet qui nous a le plus appris.

### Une solution pensée pour les vendeurs

- **Personnalisable** : un configurateur conçu sur mesure, aux couleurs de la marque.
- **En ligne** : il s'intègre directement au site web existant, sans gros développement supplémentaire.
- **Efficace** : un configurateur est le meilleur outil de vente pour les produits personnalisables.
- **Flexible** : options, prix ou produit à modifier ? Le configurateur s'adapte.

## Un outil complet

Ivy reposait sur trois piliers :

- **L'aide à la configuration** : gestion des contraintes et recommandations. Le client est guidé pour faire les bons choix, et les options incompatibles sont verrouillées.
- **La visualisation du produit** : un aperçu interactif du produit personnalisé, pour que le client puisse facilement se projeter.
- **L'export et les statistiques** : le client reçoit un récapitulatif détaillé de sa commande avec la visualisation associée, et le vendeur suit ses performances.

<div class="bg-codalem-blue flex flex-center justify-center flex-wrap py-10 gap-20 my-5 rounded-lg">
  <div class="flex flex-col items-center">
    <span class="text-6xl font-bold">60%</span>
    <span>d'intérêt en plus</span>
  </div>
  <div class="flex flex-col items-center">
    <span class="text-6xl font-bold">40%</span>
    <span>de conversion en plus</span>
  </div>
  <div class="flex flex-col items-center">
    <span class="text-6xl font-bold">27%</span>
    <span>de délai de conversion en moins</span>
  </div>
</div>

<p class="italic text-sm">Les chiffres que nous mettions en avant pour les configurateurs, d'après les études du Baymard Institute (2023) et de Deloitte (2021).</p>

## Une visualisation dynamique

Chaque élément du produit peut être échangé ou personnalisé. Sur notre configurateur de montre, le client choisit le bracelet, le boîtier, la lunette, le cadran et les aiguilles, et voit le rendu final se composer en temps réel.

<figure class="flex flex-col items-center py-5">
  <img src="/images/projects/ivy/visualisation.jpg" alt="Les pièces d'une montre (bracelet, boîtier, lunette, cadran, aiguilles) assemblées en une montre finale" class="project-screenshot project-screenshot-wide" />
</figure>

## Une intégration simple

Le configurateur s'ajoute directement sur le site du vendeur. À la fin du parcours, un e-mail est envoyé au vendeur et au client avec le résultat de la personnalisation.

<figure class="flex flex-col items-center py-5">
  <img src="/assets/watch-configurator.png" alt="E-mail récapitulatif d'une montre configurée, avec le détail de chaque pièce et le visuel final" class="project-photo" />
</figure>

- **Gain de temps** pour le vendeur comme pour le client : plus besoin d'échanger à de nombreuses reprises pour se mettre d'accord.
- **Moins d'erreurs** : grâce à la visualisation et au récapitulatif, plus de mauvaises surprises à la réception du produit.

## Des cas divers et variés

Tous les secteurs qui proposent des produits personnalisables peuvent avoir besoin d'un configurateur. Voici les interfaces que nous avons réalisées.

### Configurateur domotique

<figure class="flex flex-col items-center py-5">
  <img src="/image_confighome.webp" alt="Illustration isométrique des pièces d'une maison : chambre, cuisine, entrée, salon, salle de bain" class="project-photo" />
</figure>

Un configurateur permettant de **concevoir son système domotique**.

### Configurateur industriel de serrures connectées

<figure class="flex flex-col items-center py-5">
  <img src="/images/projects/ivy/access-control.jpg" alt="Configurateur de contrôle d'accès : choix du type, de l'administration, de la technologie, de la finition et de la couleur d'un cylindre, avec aperçu et devis" class="project-screenshot project-screenshot-wide" />
</figure>

Un configurateur pour les **cylindres et poignées connectés** d'un système de contrôle d'accès. Le client choisit étape par étape :

- **Le type de produit** : lecteur, béquille, cylindre, badge, terminal ou hub
- **Le mode d'administration** : mise à jour sur carte, hors ligne ou sans fil
- **La technologie de badge** : Mifare Classic, iClass ou DESFire
- **La finition et la couleur** : noir, inox, laiton poli, laiton satiné ou blanc

C'est aussi un **outil de vente complet** : la référence du produit se calcule automatiquement, plusieurs produits s'ajoutent à une même commande, et l'outil gère l'édition de devis, le calcul de remises et les utilisateurs.

### Nos démonstrations

Nous avons aussi construit des configurateurs de démonstration : une **montre**, un **panneau en bois** façon Minecraft avec prix en direct, et un **tabouret en liège** avec aperçu 3D (voir le projet [Configurateurs 3D](/projects/configurateurs-3d)).

<div class="flex flex-wrap justify-center gap-5 py-5">
  <img src="/images/projects/ivy/minecraft-panel.jpg" alt="Configurateur de panneau personnalisé dans Ivy : taille, couleur du bois et prix en direct" class="project-screenshot" />
  <img src="/images/projects/ivy/wine-3d.jpg" alt="Configurateur de tabouret en liège avec aperçu 3D dans Ivy" class="project-screenshot" />
</div>

## L'offre

- **La conception** : nous développions et déployions un configurateur sur mesure, avec un parcours d'achat repensé, une visualisation du produit personnalisé et un export détaillé par e-mail.
- **L'abonnement** : une fois le configurateur en ligne, un abonnement donnait accès à toutes ses fonctionnalités et à notre support. Plusieurs niveaux permettaient de le faire évoluer avec le configurateur.

## Comment ça marche

Chaque configurateur est décrit dans un simple fichier **JSON** : ses étapes, ses options et leurs règles. Ivy s'occupe du reste :

- **Des étapes guidées**, chacune avec sa miniature, et une navigation fluide de l'une à l'autre
- **Des options variées** : grilles d'images, boutons radio, champs de texte, interrupteurs
- **Un prix calculé en direct** à partir du prix de chaque option
- **Des règles métier** : exclusions et incompatibilités entre options, contraintes
- **Un aperçu 2D ou 3D** selon le produit : superposition de calques pour une montre, rendu Three.js pour un objet en volume
- **Des étiquettes** « Nouveau » et « Rupture de stock » sur les options
- **Une fin de parcours complète** : récapitulatif de la configuration, formulaire de contact et e-mail de confirmation

## L'architecture

Ivy a connu deux versions :

- **2023, une plateforme complète** : des microservices **Python / FastAPI** (authentification, organisations, catalogue produits, commandes, configurateurs, documents, recommandations), des bases MySQL, MongoDB et Redis, et une interface en micro-frontends **Vue.js** (single-spa), le tout orchestré avec **Docker**.
- **2024, une refonte plus légère** : une seule application **Nuxt 3** avec **Vuetify** et **Pinia**, des configurateurs décrits en JSON avec Nuxt Content, et des aperçus 3D en **Three.js**.

## L'équipe

- **Eddie Vallier** : architecture et back-end
- **Léo Tayot** : front-end, interfaces des configurateurs et rendu 3D
- **Maxim Audren** : marketing et relation commerciale
