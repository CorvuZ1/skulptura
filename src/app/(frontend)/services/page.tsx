import { Hero } from '@/components/sections/hero'
import { CTA } from '@/components/sections/cta'
import { Services } from '@/components/sections/services'
import { Suspense } from 'react'
import { getGlobal } from '@/api/globals'
import { getImage } from '@/lib/formatters'
import { Wait } from '@/components/ui/wait'
import { getPageMetadata } from '@/lib/utils'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'services-page' })

  return getPageMetadata('/services', data)
}

export default function ServicesPage({ searchParams }: PageProps<'/services'>) {
  return (
    <>
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
