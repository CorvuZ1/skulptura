import { revalidateTag } from 'next/cache'
import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: {
    singular: 'Подвал',
    plural: 'Подвал',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Подпись',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag('global-footer', 'max')
      },
    ],
  },
}
