import { revalidateTag } from 'next/cache'
import { CollectionConfig } from 'payload'

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
    afterChange: [
      () => {
        revalidateTag('collection-specialists', 'max')
      },
    ],
    afterDelete: [
      () => {
        revalidateTag('collection-specialists', 'max')
      },
    ],
  },
}
