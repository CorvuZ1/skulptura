import { revalidateTag } from 'next/cache'
import { GlobalConfig } from 'payload'

export const CTA: GlobalConfig = {
  slug: 'cta',
  label: {
    singular: 'Призыв к действию',
    plural: 'Призыв к действию',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Изображение',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag('global-cta', 'max')
      },
    ],
  },
}
