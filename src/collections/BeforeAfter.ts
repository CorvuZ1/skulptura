import { CollectionConfig } from 'payload'
import { revalidationHooks } from '@/lib/revalidate'

export const BeforeAfter: CollectionConfig = {
  slug: 'before-after',
  labels: {
    singular: 'До / После',
    plural: 'До / После',
  },
  fields: [
    {
      name: 'before',
      type: 'upload',
      relationTo: 'media',
      label: 'До',
      required: true,
    },
    {
      name: 'after',
      type: 'upload',
      relationTo: 'media',
      label: 'После',
      required: true,
    },
  ],
  hooks: {
    ...revalidationHooks({ tag: 'collection-before-after', globalSlugs: ['home-page'] }),
  },
}
