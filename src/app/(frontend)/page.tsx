import type { Metadata } from 'next'
import 'swiper/css'
import { getGlobal } from '@/api/globals'
import { BeforeAfter } from '@/components/sections/before-after'
import { CTA } from '@/components/sections/cta'
import { Equipment } from '@/components/sections/equipment'
import { Hero } from '@/components/sections/hero'
import { ServicesPreview } from '@/components/sections/services-preview'
import { Specialists } from '@/components/sections/specialists'
import { Stats } from '@/components/sections/stats'
import { JsonLd } from '@/components/ui/json-ld'
import { Wait } from '@/components/ui/wait'
import { getPageMetadata } from '@/lib/metadata'
import { getBeautySalonSchema, getWebSiteSchema } from '@/lib/schema'

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getGlobal({ slug: 'home-page' })

  return getPageMetadata('', data)
}

export default async function Home() {
  const contacts = await getGlobal({ slug: 'contacts' })

  return (
    <>
      <JsonLd schema={getBeautySalonSchema(contacts)} />
      <JsonLd schema={getWebSiteSchema()} />

      <h1 className="sr-only">Скульптура: студия эстетики лица и тела</h1>

      <Wait>
        <Hero fullHeight showArrow slug="home-page" />
      </Wait>

      <Wait>
        <Equipment />
      </Wait>

      <Wait>
        <ServicesPreview />
      </Wait>

      <Wait>
        <Stats />
      </Wait>

      <Wait>
        <BeforeAfter />
      </Wait>

      <Wait>
        <Specialists />
      </Wait>

      <Wait>
        <CTA className="mt-auto" />
      </Wait>
    </>
  )
}
