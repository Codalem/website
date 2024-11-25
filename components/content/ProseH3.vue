<template>
  <h3 :id="props.id" class="text-lg pt-0 pb-5">
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{
  id?: string
}>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>

<style scoped lang="scss">
h3 {
  font-family: sans-serif;
  font-weight: 900;
  color: #1e2851;
  padding-left: 70px;
  position: relative;
}

h3.reverse, .bg-codalem-blue h3 {
  color: #FFF;
  background-color: #222d5a;
}
</style>