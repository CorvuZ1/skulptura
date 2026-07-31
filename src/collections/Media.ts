import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Медиа',
    plural: 'Медиа',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  upload: {
    pasteURL: false,
    crop: true,
    formatOptions: {
      format: 'webp',
      options: {
        quality: 80,
      },
    },
  },
}
