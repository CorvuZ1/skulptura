import { Hero } from '@/components/shared/hero'
import { CTA } from '@/components/sections/cta'
import { publications } from '@/mock/publications'
import { PublicationCard } from '@/components/ui/publication-card'
import { Container } from '@/components/ui/container'
import { SearchFilters } from '@/components/ui/filters'

export default function ServicesPage() {
  return (
    <div>
      <Hero
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={<h1>Процедуры и товары</h1>}
        description="Полный спектр косметологических услуг — от инъекционных и аппаратных процедур до уходовых программ и ухода за телом."
      />

      <section className="py-24 bg-white gradient-cream-to-b">
        <Container>
          <SearchFilters tags={['TestTag13', 'TestTag32', 'TestTag64']} className="mb-6" />

          <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {publications.map((pub) => (
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

      <CTA />
    </div>
  )
}
