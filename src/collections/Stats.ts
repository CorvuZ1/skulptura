import { revalidateTag } from 'next/cache'
import { CollectionConfig } from 'payload'

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
    afterChange: [
      () => {
        revalidateTag('collection-stats', 'max')
      },
    ],
  },
}
