<template>
  <div>
    <template v-if="project">
      <div class="bg-codalem-blue px-5 pt-6 pb-10">
        <div class="max-w-5xl mx-auto">
          <NuxtLink to="/projects" class="project-muted inline-block text-sm hover:text-blue-200 mb-6">
            ← Tous les projets
          </NuxtLink>

          <div class="flex flex-col md:flex-row items-center gap-10">
            <nuxt-img :src="project.cover" :alt="`Couverture de ${project.title}`" class="project-cover w-full md:w-1/2 rounded-xl" />
            <div class="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
              <p v-if="project.tags?.length" class="project-muted text-xs font-bold uppercase tracking-widest">
                {{ project.tags.join(' · ') }}
              </p>
              <h1 class="text-5xl font-extrabold leading-tight">{{ project.title }}</h1>
              <p class="text-lg leading-relaxed">{{ project.description }}</p>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link self-center md:self-start font-bold rounded-lg px-5 py-2.5 mt-2 text-lg"
              >
                {{ project.linkLabel ?? 'Découvrir le projet' }} ↗
              </a>
            </div>
          </div>

          <dl class="project-meta grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-6 text-center sm:text-left">
            <div class="flex items-center gap-3 justify-center sm:justify-start">
              <div class="flex shrink-0 -space-x-3">
                <nuxt-img
                  v-for="owner in project.owners"
                  :key="owner.name"
                  :src="owner.photo"
                  :alt="owner.name"
                  class="owner-avatar w-12 h-12 object-cover teamAvatar-sm"
                />
              </div>
              <div class="flex flex-col leading-tight text-left">
                <dt class="project-muted text-xs uppercase tracking-widest">{{ ownersLabel(project.owners) }}</dt>
                <dd class="font-bold text-lg">{{ formatOwnerNames(project.owners) }}</dd>
              </div>
            </div>
            <div v-if="project.publishedAt" class="flex flex-col justify-center gap-1">
              <dt class="project-muted text-xs uppercase tracking-widest">Publié le</dt>
              <dd class="font-bold text-lg">{{ project.publishedAt }}</dd>
            </div>
            <div v-if="project.technologies?.length" class="flex flex-col justify-center gap-2">
              <dt class="project-muted text-xs uppercase tracking-widest">Technologies</dt>
              <dd class="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span v-for="technology in project.technologies" :key="technology" class="project-technology text-xs font-bold px-2 py-1 rounded">
                  {{ technology }}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="project-body max-w-5xl mx-auto pb-10">
        <ContentRenderer :value="project" />
      </div>
    </template>

    <CustomFooter linkedin="https://fr.linkedin.com/company/codalem">
      Copyright - Codalem - {{ new Date().getFullYear() }}
    </CustomFooter>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/project'

const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryContent<Project>('projects', slug).findOne()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable', fatal: true })
}

useHead({
  title: `${project.value.title} - Codalem`,
  meta: [{ name: 'description', content: project.value.description }]
})
</script>

<style scoped>
.project-muted {
  color: rgba(253, 253, 253, 0.65);
}

.project-cover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
}

.project-meta {
  border-top: 1px solid rgba(253, 253, 253, 0.2);
}

.project-technology {
  border: 1px solid rgba(253, 253, 253, 0.6);
  color: #fdfdfd;
}

.project-link {
  background-color: #fdfdfd;
  color: #222d5a;
}

.project-link:hover {
  background-color: #dbe4ff;
}

.teamAvatar-sm {
  border-radius: 20%;
}

.owner-avatar {
  border: 2px solid #222d5a;
}

.project-body :deep(p),
.project-body :deep(ul) {
  padding-left: 70px;
  padding-right: 20px;
}

.project-body :deep(ul) {
  list-style: disc;
  list-style-position: inside;
}

.project-body :deep(p a),
.project-body :deep(li a) {
  color: #222d5a;
  font-weight: 700;
  text-decoration: underline;
}

.project-body :deep(h3) {
  margin-top: 2rem;
}

.project-body :deep(blockquote) {
  margin: 0 20px 10px 70px;
  padding: 15px 20px;
  border-left: 6px solid #222d5a;
  background-color: #f3f5fb;
  border-radius: 0 8px 8px 0;
  font-style: italic;
}

.project-body :deep(blockquote p) {
  padding: 0;
}

.project-body :deep(.project-photo) {
  height: 400px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.project-body :deep(.project-screenshot) {
  width: 400px;
  max-width: 100%;
  border: 3px solid #222d5a;
  border-radius: 8px;
}

.project-body :deep(.project-screenshot-wide) {
  width: 800px;
}

.project-body :deep(.project-screenshot-pixel) {
  image-rendering: pixelated;
}

@media (max-width: 767px) {
  .project-body :deep(p),
  .project-body :deep(ul) {
    padding-left: 20px;
  }

  .project-body :deep(blockquote) {
    margin-left: 20px;
  }
}
</style>
