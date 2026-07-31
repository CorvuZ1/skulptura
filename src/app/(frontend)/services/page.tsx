import { getCollection } from '@/api/collections'
import { getGlobal } from '@/api/globals'
import { CTA } from '@/components/sections/cta'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { JsonLd } from '@/components/ui/json-ld'
import { Wait } from '@/components/ui/wait'
import { getPageMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema,getServicesCollectionSchema, getWebSiteSchema } from '@/lib/schema'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'services-page' })

  return getPageMetadata('/services', data)
}

export default async function ServicesPage({ searchParams }: PageProps<'/services'>) {
  const servicesData = await getCollection({ collection: 'services', limit: 0, pagination: false })

  return (
    <>
      <JsonLd schema={getWebSiteSchema()} />
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: 'Главная', url: `${process.env.NEXT_PUBLIC_URL}` },
          { name: 'Процедуры и товары', url: `${process.env.NEXT_PUBLIC_URL}/services` },
        ])}
      />
      {servicesData.docs.length > 0 && (
        <JsonLd schema={getServicesCollectionSchema(servicesData.docs)} />
      )}

      <Wait>
        <Hero slug="services-page" />
      </Wait>

      <Wait>
        <Services searchParams={searchParams} />
      </Wait>

      <Wait>
        <CTA className="mt-auto" />
      </Wait>
    </>
  )
}
