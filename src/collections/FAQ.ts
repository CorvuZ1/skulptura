import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQ',
  },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'updatedAt', 'createdAt'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      label: 'Вопрос',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      label: 'Ответ',
      required: true,
    },
    lexicalHTMLField({
      lexicalFieldName: 'answer',
      htmlFieldName: 'answerHtml',
    }),
  ],
}
