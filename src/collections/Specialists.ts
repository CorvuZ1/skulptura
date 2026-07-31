import { CollectionConfig } from 'payload'
import { revalidationHooks } from '@/lib/revalidate'

export const Specialists: CollectionConfig = {
  slug: 'specialists',
  labels: {
    singular: 'Специалист',
    plural: 'Специалисты',
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      label: 'Подпись',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'Имя',
      required: true,
    },
    {
      name: 'specialization',
      type: 'text',
      label: 'Специализация',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Изображение',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tags',
      type: 'text',
      label: 'Теги',
      hasMany: true,
      required: true,
    },
  ],
  hooks: {
    ...revalidationHooks({
      tag: 'collection-specialists',
      globalSlugs: ['home-page'],
    }),
  },
}
