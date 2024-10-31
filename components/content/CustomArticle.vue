<template>
  <article class="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 m-5 mb-6">
    <nuxt-img
      v-if="src && imagePosition == 'left'"
      :width="w" :height="h"
      :src="src" :alt="alt"
      class="h-auto rounded-lg mx-auto md:mx-0"
      :class="{
        grayscale
      }"
    />
    <div class="text-base leading-relaxed text-center md:text-left">
      <slot />
    </div>
    <nuxt-img
      v-if="src && imagePosition == 'right'"
      :width="w" :height="h"
      :src="src" :alt="alt"
      class="h-auto rounded-lg mx-auto md:mx-0"
      :class="{
        grayscale
      }"
    />
  </article>
</template>

<script lang="ts" setup>
const {
  imagePosition = 'left',
  classSize = 'w-48',
  grayscale = false
} = defineProps<{
  src?: string
  alt?: string
  imagePosition?: string
  grayscale?: boolean
  w?: number
  h?: number
  classSize?: string
}>()
</script>

<style>
</style>
