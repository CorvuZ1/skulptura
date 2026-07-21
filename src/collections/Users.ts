import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
    defaultColumns: ['username', 'updatedAt', 'createdAt'],
  },
  auth: {
    loginWithUsername: true,
  },
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
