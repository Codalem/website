<template>
  <NuxtLink :to="project._path" class="project-card flex flex-col bg-white rounded-lg overflow-hidden">
    <nuxt-img :src="project.cover" :alt="`Couverture de ${project.title}`" class="w-full aspect-[5/3] object-cover" />
    <div class="flex flex-col flex-1 p-5 gap-3">
      <div v-if="project.tags?.length" class="flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="project-tag text-xs font-bold px-2 py-1 rounded">
          {{ tag }}
        </span>
      </div>
      <h3 class="project-title text-2xl">{{ project.title }}</h3>
      <p class="flex-1">{{ project.description }}</p>
      <div class="flex items-center gap-3 pt-3 border-t border-gray-200">
        <div class="flex shrink-0 -space-x-3">
          <nuxt-img
            v-for="owner in project.owners"
            :key="owner.name"
            :src="owner.photo"
            :alt="owner.name"
            class="owner-avatar w-10 h-10 object-cover teamAvatar-sm"
          />
        </div>
        <div class="flex flex-col leading-tight">
          <span class="text-xs uppercase tracking-wide">{{ ownersLabel(project.owners) }}</span>
          <span class="font-bold project-owner">{{ formatOwnerNames(project.owners) }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project-card {
  border: 3px solid #222d5a;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(34, 45, 90, 0.25);
}

.project-title {
  font-family: sans-serif;
  font-weight: 800;
  color: #222d5a;
}

.project-owner {
  color: #222d5a;
}

.project-tag {
  background-color: #222d5a;
  color: #fdfdfd;
}

.teamAvatar-sm {
  border-radius: 20%;
}

.owner-avatar {
  border: 2px solid #fff;
}
</style>
