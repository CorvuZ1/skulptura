import type { Field } from 'payload'

export const seoPage: Field[] = [
  {
    name: 'seoTitle',
    type: 'text',
    label: 'Заголовок',
  },
  {
    name: 'seoDescription',
    type: 'text',
    label: 'Описание',
  },
  {
    name: 'seoKeywords',
    type: 'text',
    label: 'Ключевые слова',
    hasMany: true,
  },
]
