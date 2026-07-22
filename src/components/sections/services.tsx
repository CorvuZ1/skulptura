import { publications } from '@/mock/publications'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { PublicationCard } from '../ui/publication-card'
import { SearchFilters } from '../ui/filters'

export const Services = () => {
  return (
    <Section title={<h2>Ваша формула красоты</h2>}>
      <Container className="w-full">
        <SearchFilters tags={['TestTag13', 'TestTag32', 'TestTag64']} className="mb-6" />

        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
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
  )
}
