import type { Field } from 'payload'

export const headPage: Field[] = [
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
  },
  {
    name: 'image',
    type: 'upload',
    label: 'Изображение',
    relationTo: 'media',
    required: true,
  },
]
