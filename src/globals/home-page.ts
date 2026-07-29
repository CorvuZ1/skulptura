import { headPage } from '@/fields/head-page'
import { seoPage } from '@/fields/seo-page'
import { revalidateTag } from 'next/cache'
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
  hooks: {
    afterChange: [
      () => {
        revalidateTag('global-home-page', 'max')
      },
    ],
  },
}
