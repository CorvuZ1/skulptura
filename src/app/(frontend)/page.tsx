import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { SpecialistCard } from '@/components/ui/specialist-card'
import { EquipmentSlider } from '@/components/ui/equipment-slider'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { Container } from '@/components/ui/container'
import { CTA } from '@/components/sections/cta'
import 'swiper/css'
import { BeforeAfter } from '@/components/sections/before-after'
import { Equipment } from '@/components/sections/equipment'
import { ServicesPreview } from '@/components/sections/services-preview'
import { Stats } from '@/components/sections/stats'
import { Specialists } from '@/components/sections/specialists'
import { getGlobal } from '@/api/globals'
import { Wait } from '@/components/ui/wait'
import { getPageMetadata } from '@/lib/metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getGlobal({ slug: 'home-page' })

  return getPageMetadata('', data)
}

export default function Home() {
  return (
    <>
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
