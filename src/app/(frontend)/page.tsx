import { specialists } from '../../mock/specialists'

import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { SpecialistCard } from '@/components/ui/specialist-card'
import { PublicationCard } from '@/components/ui/publication-card'
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

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">Скульптура: студия эстетики лица и тела</h1>
      <Hero
        fullHeight
        showArrow
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={
          <div className="animate-background-shimmer pb-2 bg-[linear-gradient(90deg,#d49a2e,#f4e3b8,#d49a2e)] bg-size-[500%_auto] bg-clip-text text-transparent">
            Красота, в которой
            <br />
            сияет здоровье
          </div>
        }
        description="Студия косметологии с медицинским подходом. Инъекционные и аппаратные процедуры, индивидуальный уход и внимание к каждой детали вашего совершенства."
      />

      <Equipment />

      <ServicesPreview />

      <Stats />

      <BeforeAfter />

      <Specialists />

      <CTA />
    </div>
  )
}
