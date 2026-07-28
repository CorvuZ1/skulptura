import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ServiceCard } from '../ui/service-card'
import { SearchServices } from '../ui/search-services'
import { BlockReveal } from '../ui/block-reveal'
import { getCollection } from '@/api/collections'
import { Warning } from '../ui/warning'
import { Pagination } from '../ui/pagination'

export interface IServicesProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export const Services = async (props: IServicesProps) => {
  const searchParams = await props.searchParams

  const searchParam = (searchParams.search as string) || ''
  const tagsParam = Array.isArray(searchParams.tags)
    ? searchParams.tags
    : searchParams.tags
      ? [searchParams.tags]
      : []
  const pageParam = Number(searchParams.page) || 1

  const servicesData = await getCollection({
    collection: 'services',
    limit: 3,
    page: pageParam,
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

  const tagsData = await getCollection({
    collection: 'services',
    limit: 0,
    pagination: false,
    select: {
      tags: true,
    },
  })

  const allTags = [...new Set(tagsData.docs.flatMap((item) => item.tags || []))]

  return (
    <Section title={<h2>Ваша формула красоты</h2>}>
      <BlockReveal from={{ x: -50 }} to={{ x: 0 }}>
        <Container className="w-full">
          <SearchServices
            tags={allTags}
            pagination={{
              page: servicesData.page || 1,
              totalPages: servicesData.totalPages,
              hasPrevPage: servicesData.hasPrevPage,
              hasNextPage: servicesData.hasNextPage,
              prevPage: servicesData.prevPage || null,
              nextPage: servicesData.nextPage || null,
            }}
          >
            {servicesData.docs.length > 0 ? (
              <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
                {servicesData.docs.map((publication) => (
                  <ServiceCard
                    id={publication.id}
                    key={publication.id}
                    description={publication.description}
                    values={publication.values}
                    name={publication.name}
                  />
                ))}
              </div>
            ) : (
              <Warning
                title="Ничего не найдено"
                description="Попробуйте изменить поисковый запрос или выбранные фильтры."
              />
            )}
          </SearchServices>
        </Container>
      </BlockReveal>
    </Section>
  )
}
