import { publications } from '@/mock/publications'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ServiceCard } from '../ui/service-card'
import { SearchFilters } from '../ui/filters'
import { BlockReveal } from '../ui/block-reveal'
import { getCollection } from '@/api/collections'

export interface IServicesProps {
  searchParams: Record<string, string | string[] | undefined>
}

export const Services = async (props: IServicesProps) => {
  const { searchParams } = props

  const searchParam = (searchParams.search as string) || ''
  const tagsParam = Array.isArray(searchParams.tags)
    ? searchParams.tags
    : searchParams.tags
      ? [searchParams.tags]
      : []

  const data = await getCollection({
    collection: 'services',
    where: {
      and: [
        {
          tags: {
            contains: tagsParam,
          },
        },
      ],
      or: [
        {
          name: {
            contains: searchParam,
          },
        },
        {
          description: {
            contains: searchParam,
          },
        },
        {
          'values.key': {
            contains: searchParam,
          },
        },
      ],
    },
  })

  const allTags = [...new Set(data.docs.flatMap((item) => item.tags || []))]

  return (
    <Section title={<h2>Ваша формула красоты</h2>}>
      <Container className="w-full">
        <SearchFilters tags={allTags} className="mb-6" />
        <BlockReveal from={{ x: -50 }} to={{ x: 0 }}>
          <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
            {data.docs.map((publication) => (
              <ServiceCard
                id={publication.id}
                key={publication.id}
                description={publication.description}
                values={publication.values}
                name={publication.name}
              />
            ))}
          </div>
        </BlockReveal>
      </Container>
    </Section>
  )
}
