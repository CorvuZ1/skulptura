import { revalidateTag } from 'next/cache'
import { GlobalConfig } from 'payload'

export const Contacts: GlobalConfig = {
  slug: 'contacts',
  label: {
    singular: 'Контакты',
    plural: 'Контакты',
  },

  fields: [
    {
      name: 'address',
      type: 'text',
      label: 'Адрес',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Телефон',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Почта',
    },
    {
      name: 'hours',
      type: 'text',
      label: 'Часы работы',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram',
    },
    {
      name: 'telegram',
      type: 'text',
      label: 'Telegram',
    },
    {
      name: 'whatsapp',
      type: 'text',
      label: 'WhatsApp',
    },
    {
      name: 'max',
      type: 'text',
      label: 'Max',
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag('global-contacts', 'max')
      },
    ],
  },
}
