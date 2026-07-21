import { headPage } from '@/fields/head-page'
import { seoPage } from '@/fields/seo-page'
import { GlobalConfig } from 'payload'

export const ContactsPage: GlobalConfig = {
  slug: 'contacts-page',
  label: {
    singular: 'Контакты',
    plural: 'Контакты',
  },
  admin: {
    group: 'Страницы',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Информация',
          fields: headPage,
        },
        {
          label: 'SEO',
          fields: seoPage,
        },
      ],
    },
  ],
}
