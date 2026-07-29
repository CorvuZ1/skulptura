import { revalidateTag } from 'next/cache'
import { CollectionConfig } from 'payload'

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
    afterChange: [
      () => {
        revalidateTag('collection-before-after', 'max')
      },
    ],
  },
}
