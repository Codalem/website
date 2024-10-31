<template>
  <div class="w-full text-center my-6">
    <a :href="href" rel="nofollow" class="focus:outline-none text-white bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-800 text-2xl">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  href: string
}>()
</script>