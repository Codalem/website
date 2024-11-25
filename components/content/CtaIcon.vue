<template>
  <div class="flex justify-center my-6 p-5">
    <a :href="href" :alt="alt">
      <nuxt-img :src="src" :alt="alt" class="mx-auto w-24 h-auto" />
      <span class="anchor-title">{{alt}}</span>
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

<style scoped>
div:hover {
  background-color: #25367b;
  border-radius: 10px;
  cursor: pointer;
}

a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.anchor-title {
  font-size: 1.2em;
  font-weight: 900;
}
</style>
