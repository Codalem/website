<template>
  <div class="flex justify-center my-6">
    <a :href="href" rel="nofollow" :alt="alt" target="_blank">
      <nuxt-img :src="src" :alt="alt" class="mx-auto w-48 h-auto" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  href: string
  alt: string
}>()
</script>

<style>

</style>
