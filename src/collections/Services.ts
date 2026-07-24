import { CollectionConfig } from 'payload'

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
      label: 'Название',
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
      label: 'Ключ / Значение',
      labels: {
        singular: 'Ключ / Значение',
        plural: 'Ключи / Значения',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'key',
              type: 'text',
              label: 'Ключ',
            },
            {
              name: 'value',
              type: 'text',
              label: 'Значение',
            },
          ],
        },
      ],
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
