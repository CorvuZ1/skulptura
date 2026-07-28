import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { SpecialistCard } from '@/components/ui/specialist-card'
import { publications } from '@/mock/publications'
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
import { getImage } from '@/lib/formatters'
import { getGlobal } from '@/api/globals'
import { Suspense } from 'react'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'home-page' })

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
}

export default async function Home() {
  const data = await getGlobal({ slug: 'home-page' })

  return (
    <div>
      <h1 className="sr-only">Скульптура: студия эстетики лица и тела</h1>
      <Hero
        fullHeight
        showArrow
        image={data.image}
        title={
          <div className="animate-background-shimmer pb-2 bg-[linear-gradient(90deg,#d49a2e,#f4e3b8,#d49a2e)] bg-size-[500%_auto] bg-clip-text text-transparent">
            {data.title}
          </div>
        }
        description={data.description || ''}
      />

      <Suspense>
        <Equipment />
      </Suspense>

      <Suspense>
        <ServicesPreview />
      </Suspense>

      <Suspense>
        <Stats />
      </Suspense>

      <Suspense>
        <BeforeAfter />
      </Suspense>

      <Suspense>
        <Specialists />
      </Suspense>

      <Suspense>
        <CTA />
      </Suspense>
    </div>
  )
}
