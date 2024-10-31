<template>
  <div class="bg-codalem-blue flex justify-center items-start p-10 mb-0 sm:p-20 w-full">
    <nuxt-img v-if="src" :src="src" class="max-h-32"/>
    <h1 class="text-center text-6xl p-10">
      <ContentSlot :use="$slots.default" unwrap="p"/>
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Sans serif", cursive;
  color: #222d5a;
  display: none;
}
</style>