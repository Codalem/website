<template>
  <div class="grid gap-8 px-5 md:px-10 pb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    <ProjectCard v-for="project in projects" :key="project._path" :project="project" />
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/project'

const props = defineProps<{
  limit?: number | string
}>()
const limit = props.limit ? Number(props.limit) : undefined

const { data: projects } = await useAsyncData(`projects-${limit ?? 'all'}`, () => {
  const query = queryContent<Project>('projects').sort({ date: -1 })
  return (limit ? query.limit(limit) : query).find()
})
</script>
