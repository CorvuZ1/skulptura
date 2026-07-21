import { Hero } from '@/components/shared/hero'
import { CTA } from '@/components/sections/cta'
import { publications } from '@/mock/publications'
import { PublicationCard } from '@/components/ui/publication-card'
import { Container } from '@/components/ui/container'
import { SearchFilters } from '@/components/ui/filters'
import { Section } from '@/components/ui/section'
import { SliderNav } from '@/components/ui/slider-nav'

export default function ServicesPage() {
  return (
    <div>
      <Hero
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={<h1>Процедуры и товары</h1>}
        description="Полный спектр косметологических услуг — от инъекционных и аппаратных процедур до уходовых программ и ухода за телом."
      />

      <Section title={<h2>Ваша формула красоты</h2>}>
        <Container>
          <SearchFilters tags={['TestTag13', 'TestTag32', 'TestTag64']} className="mb-6" />

          <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {publications.map((publication) => (
              <PublicationCard
                key={publication.id}
                description={publication.description}
                services={publication.services}
                title={publication.title}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </div>
  )
}
