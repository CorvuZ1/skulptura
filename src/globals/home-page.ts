import { headPage } from '@/fields/head-page'
import { seoPage } from '@/fields/seo-page'
import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: {
    singular: 'Главная',
    plural: 'Главная',
  },
  admin: {
    group: 'Страницы',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Вступление',
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
