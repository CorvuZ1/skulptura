import { publications } from '@/mock/publications'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ServiceCard } from '../ui/service-card'
import { SearchFilters } from '../ui/filters'
import { BlockReveal } from '../ui/block-reveal'

export const Services = () => {
  return (
    <Section title={<h2>Ваша формула красоты</h2>}>
      <Container className="w-full">
        <SearchFilters tags={['TestTag13', 'TestTag32', 'TestTag64']} className="mb-6" />
        <BlockReveal from={{ x: -50 }} to={{ x: 0 }}>
          <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
            {publications.map((publication) => (
              <ServiceCard
                key={publication.id}
                description={publication.description}
                services={publication.services}
                title={publication.title}
              />
            ))}
          </div>
        </BlockReveal>
      </Container>
    </Section>
  )
}
