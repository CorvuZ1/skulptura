import { Hero } from '@/components/sections/hero'
import { CTA } from '@/components/sections/cta'
import { publications } from '@/mock/publications'
import { Container } from '@/components/ui/container'
import { SearchFilters } from '@/components/ui/filters'
import { Section } from '@/components/ui/section'
import { SliderNav } from '@/components/ui/slider-nav'
import { Services } from '@/components/sections/services'
import { Suspense } from 'react'

export default function ServicesPage() {
  return (
    <div>
      <Hero
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={<h1>Процедуры и товары</h1>}
        description="Полный спектр косметологических услуг — от инъекционных и аппаратных процедур до уходовых программ и ухода за телом."
      />

      <Suspense>
        <Services />
      </Suspense>

      <CTA />
    </div>
  )
}
