import { CollectionConfig } from 'payload'
import { revalidationHooks } from '@/lib/revalidate'

export const Stats: CollectionConfig = {
  slug: 'stats',
  labels: {
    singular: 'Элемент статистики',
    plural: 'Статистика',
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      label: 'Значение (Цифра)',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'Название',
      required: true,
    },
  ],
  hooks: {
    ...revalidationHooks({
      tag: 'collection-stats',
      globalSlugs: ['home-page'],
    }),
  },
}
