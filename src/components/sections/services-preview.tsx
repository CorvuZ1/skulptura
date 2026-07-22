import { publications } from '@/mock/publications'
import { Container } from '../ui/container'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { PublicationCard } from '../ui/publication-card'
import { Section } from '../ui/section'
import { ROUTES } from '@/lib/routes'

export const ServicesPreview = () => {
  return (
    <Section
      title={<h2>Процедуры и товары</h2>}
      right={
        publications.length > 3 && (
          <Button variant="ghost" className="group" href={ROUTES.services.href}>
            Смотреть все
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        )
      }
      className="py-24 bg-white gradient-cream-to-b"
    >
      <Container className="w-full">
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
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
    </Section>
  )
}
