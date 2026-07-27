import { CollectionConfig } from 'payload'

export const Equipment: CollectionConfig = {
  slug: 'equipment',
  labels: {
    singular: 'Оборудование',
    plural: 'Оборудование',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Название',
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
}
