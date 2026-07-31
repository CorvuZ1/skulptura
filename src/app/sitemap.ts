import type { MetadataRoute } from 'next'
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  const [homePage, servicesPage, contactsPage, services] = await Promise.all([
    payload.findGlobal({ slug: 'home-page' }),
    payload.findGlobal({ slug: 'services-page' }),
    payload.findGlobal({ slug: 'contacts-page' }),
    payload.find({
      collection: 'services',
      limit: 9,
      select: {
        updatedAt: true,
      },
    }),
  ])

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: process.env.NEXT_PUBLIC_URL!,
      lastModified: homePage.updatedAt!,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL!}/services`,
      lastModified: servicesPage.updatedAt!,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL!}/contacts`,
      lastModified: contactsPage.updatedAt!,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  for (let page = 2; page <= services.totalPages; page++) {
    sitemap.push({
      url: `${process.env.NEXT_PUBLIC_URL!}/services?page=${page}`,
      lastModified: servicesPage.updatedAt!,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  }

  return sitemap
}
