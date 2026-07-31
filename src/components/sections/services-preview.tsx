import { ArrowRight } from 'lucide-react'
import { getCollection } from '@/api/collections'
import { BlockReveal } from '@/components/ui/block-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ServiceCard } from '@/components/ui/service-card'
import { ROUTES } from '@/lib/routes'

export const ServicesPreview = async () => {
  const data = await getCollection({ collection: 'services', limit: 3 })

  return (
    <Section
      title={<h2>Процедуры и товары</h2>}
      right={
        data.totalDocs > 3 && (
          <Button variant="ghost" className="group" href={ROUTES.services.href}>
            Смотреть все
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        )
      }
      className="gradient-cream-to-b"
    >
      <Container className="w-full">
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
