import type { ProjectOwner } from '~/types/project'

export function formatOwnerNames(owners: ProjectOwner[]): string {
  const names = owners.map(owner => owner.name)
  if (names.length <= 1) return names.join('')
  return `${names.slice(0, -1).join(', ')} et ${names[names.length - 1]}`
}

export function ownersLabel(owners: ProjectOwner[]): string {
  return owners.length > 1 ? 'Product Owners' : 'Product Owner'
}
