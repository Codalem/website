<template>
  <icon>
    <nuxt-img
      v-if="src && imagePosition == 'left'"
      :width="w" :height="h"
      :src="src" :alt="alt"
      class="h-auto rounded-lg mx-auto md:mx-0"
      :class="{
        downloadIcon,
        grayscale
      }"
    />
  </icon>
</template>

<script lang="ts" setup>
const {
  imagePosition = 'left',
  classSize = 'w-48',
  downloadIcon = false,
  grayscale = false
} = defineProps<{
  src?: string
  alt?: string
  imagePosition?: string
  grayscale?: boolean
  w?: number
  h?: number
  downloadIcon?: boolean
  classSize?: string
}>()
</script>

<style scoped>
img {
  display: inline-block;
  width: 32px;
  vertical-align: top;
}

</style>
