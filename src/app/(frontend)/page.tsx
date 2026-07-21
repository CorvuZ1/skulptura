import { specialists } from '../../mock/specialists'

import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/shared/hero'
import { Button } from '@/components/ui/button'
import { SpecialistCard } from '@/components/ui/specialist-card'
import { PublicationCard } from '@/components/ui/publication-card'
import { publications } from '@/mock/publications'
import { EquipmentSlider } from '@/components/ui/equipment-slider'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { Container } from '@/components/ui/container'
import { CTA } from '@/components/sections/cta'
import 'swiper/css'

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">Скульптура: студия эстетики лица и тела</h1>
      <Hero
        fullHeight
        showArrow
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={
          <div>
            Красота, в которой
            <br />
            <span className="shimmer-text">сияет здоровье</span>
          </div>
        }
        description="Студия косметологии с медицинским подходом. Инъекционные и аппаратные процедуры, индивидуальный уход и внимание к каждой детали вашего совершенства."
      />

      <EquipmentSlider />

      {/* ── Publications ── */}
      <section className="py-24 bg-white gradient-cream-to-b">
        <Container>
          <div className="mb-16 flex flex-row items-end justify-between gap-6 sm:flex-col sm:items-start">
            <h2 className="text-6xl font-light leading-tight text-charcoal-800 lg:text-5xl sm:text-4xl">
              Процедуры и товары
            </h2>
            {publications.length > 3 && (
              <Button variant="ghost" className="group" href="/services">
                Смотреть все
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {publications.slice(0, 3).map((pub) => (
              <PublicationCard
                key={pub.id}
                description={pub.description}
                services={pub.services}
                title={pub.title}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="relative overflow-hidden bg-charcoal-800 py-20">
        <Container className="relative">
          <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 text-center">
            {[
              { value: '15', label: 'лет на рынке' },
              { value: '12000+', label: 'довольных клиентов' },
              { value: '50+', label: 'видов процедур' },
              { value: '4.9', label: 'средняя оценка' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 text-6xl font-light text-gold-400 lg:text-5xl">0</div>
                <div className="text-sm uppercase tracking-wider text-cream-100/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BeforeAfterSlider />

      {/* ── Specialists preview ── */}
      <section className="py-24 gradient-cream-to-b">
        <Container>
          <h2 className="text-6xl lg:text-5xl sm:text-4xl mb-16 font-light leading-tight text-charcoal-800">
            Специалисты
          </h2>
          <div className="flex flex-col gap-16">
            {specialists.map((spec, idx) => (
              <SpecialistCard
                key={spec.id}
                experience={spec.experience}
                image={spec.image}
                name={spec.name}
                role={spec.role}
                specializations={spec.specializations}
                isReversed={idx % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
