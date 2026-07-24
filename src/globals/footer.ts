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
}
