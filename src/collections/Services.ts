import { CollectionConfig } from 'payload'
import { revalidationHooks } from '@/lib/revalidate'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Процедура или товар',
    plural: 'Процедуры или товары',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'values',
      type: 'array',
      labels: {
        singular: 'Название / Цена',
        plural: 'Названия / Цены',
      },
      required: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'key',
              type: 'text',
              label: 'Название',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Цена',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      type: 'text',
      label: 'Теги',
      hasMany: true,
      defaultValue: [],
      required: true,
    },
  ],
  hooks: {
    ...revalidationHooks({
      tag: 'collection-services',
      globalSlugs: ['services-page'],
    }),
  },
}
