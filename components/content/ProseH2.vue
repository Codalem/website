<template>
  <h2 :id="props.id" class="text-4xl py-10">
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
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
h2 {
  font-family: sans-serif;
  font-weight: 800;
  color: #222d5a;
  padding-left: 70px;
  position: relative;
}

h2:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 20px 20px 20px 20px;
  border: #222d5a 7px solid;
}

h2:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 18px;
  height: 40px;
  background-color: #FFF;
}
h2.reverse, .bg-codalem-blue h2 {
  color: #FFF;
  background-color: #222d5a;
}
h2.reverse:before, .bg-codalem-blue h2:before {
  color: #222d5a;
  border-color: #FFF;
}
h2.reverse:after, .bg-codalem-blue h2:after {
  background-color: #222d5a;
}
</style>