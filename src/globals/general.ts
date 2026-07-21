import { GlobalConfig } from 'payload'

export const General: GlobalConfig = {
  slug: 'general',
  label: {
    singular: 'Общее',
    plural: 'Общее',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Логотип',
    },
  ],
}
