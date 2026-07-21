import { CollectionConfig } from 'payload'

export const Requests: CollectionConfig = {
  slug: 'requests',
  labels: {
    singular: 'Заявка',
    plural: 'Заявки',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Обратная связь',
  },
  access: {
    create: () => false,
  },
  disableBulkEdit: true,
  disableDuplicate: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Имя',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'phone',
      type: 'number',
      label: 'Телефон',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Сообщение',
      admin: {
        readOnly: true,
      },
    },
  ],
}
