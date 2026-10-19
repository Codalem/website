<template>
  <div>
    <ProseH2>Nos projets</ProseH2>
    <CustomArticle>
      Codalem est notre <b>bac à sable</b> : chaque projet ci-dessous est né d'une idée, d'une envie ou d'une curiosité de l'équipe.
      Jeux vidéo, outils web, expérimentations… Découvrez ce que nous avons construit et qui l'a porté.
    </CustomArticle>

    <ProjectList />

    <CustomFooter linkedin="https://fr.linkedin.com/company/codalem">
      Copyright - Codalem - {{ new Date().getFullYear() }}
    </CustomFooter>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Projets - Codalem'
})
</script>
