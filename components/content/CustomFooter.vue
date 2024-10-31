<template>
  <footer class="bg-codalem-blue py-8">
    <div class="container mx-auto flex justify-center space-x-6">
      <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2">
        <nuxt-img src="/networks/linkedin.png" alt="LinkedIn" class="w-8 h-8"/>
      </a>
    </div>
    <p class="text-center mt-5">
      <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  linkedin?: string,
}>()
</script>

<style>
/* Ajoute des styles personnalisés ici si nécessaire */
</style>
