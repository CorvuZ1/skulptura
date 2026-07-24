import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { Field } from 'payload'

export const headPage: Field[] = [
  {
    name: 'headTitle',
    type: 'text',
    label: 'Заголовок',
    required: true,
  },
  {
    name: 'headDescription',
    type: 'textarea',
    label: 'Описание',
  },
  lexicalHTMLField({
    lexicalFieldName: 'headDescription',
    htmlFieldName: 'headDescriptionHtml',
  }),
]
