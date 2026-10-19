import type { ParsedContent } from '@nuxt/content'

export interface ProjectOwner {
  name: string
  photo: string
}

export interface Project extends ParsedContent {
  title: string
  description: string
  cover: string
  owners: ProjectOwner[]
  link?: string
  linkLabel?: string
  tags?: string[]
  technologies?: string[]
  publishedAt?: string
  date?: string
}
