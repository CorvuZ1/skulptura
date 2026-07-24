import { CollectionConfig } from 'payload'

export const Specialists: CollectionConfig = {
  slug: 'specialists',
  labels: {
    singular: 'Специалист',
    plural: 'Специалисты',
  },
  fields: [
    {
      name: 'experience',
      type: 'text',
      label: 'Опыт работы',
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
      name: 'tags',
      type: 'text',
      label: 'Теги',
      hasMany: true,
      required: true,
    },
  ],
}
