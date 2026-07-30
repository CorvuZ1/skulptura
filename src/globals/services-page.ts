import { headPage } from '@/fields/head-page'
import { seoPage } from '@/fields/seo-page'
import { revalidationHooks } from '@/lib/revalidate'
import { revalidateTag } from 'next/cache'
import { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  label: {
    singular: 'Процедуры и товары',
    plural: 'Процедуры и товары',
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
    ...revalidationHooks({
      tag: 'global-services-page',
    }),
  },
}
