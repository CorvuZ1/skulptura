import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import { slugField, type CollectionConfig } from 'payload'
import { slugify } from 'transliteration'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'image', 'shortDescription', 'tags', 'updatedAt', 'createdAt'],
  },
  labels: {
    singular: 'Пост',
    plural: 'Посты',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    slugField({
      useAsSlug: 'title',
      slugify: (input) =>
        slugify(input.valueToSlugify, { lowercase: true, separator: '-', trim: true }),
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Изображение',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Короткое описание',
    },
    lexicalHTMLField({
      lexicalFieldName: 'shortDescription',
      htmlFieldName: 'shortDescriptionHtml',
    }),
    {
      name: 'fullDescription',
      type: 'textarea',
      required: true,
      label: 'Полное описание',
    },
    lexicalHTMLField({
      lexicalFieldName: 'fullDescription',
      htmlFieldName: 'fullDescriptionHtml',
    }),
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      label: 'Галерея',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'text',
      label: 'Теги',
      hasMany: true,
    },

    {
      name: 'otherPosts',
      type: 'relationship',
      label: 'Другие публикации',
      relationTo: 'posts',
      hasMany: true,
    },
  ],
}
