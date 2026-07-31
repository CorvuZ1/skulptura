import { getCollection } from '@/api/collections'
import { BlockReveal } from '@/components/ui/block-reveal'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SpecialistCard } from '@/components/ui/specialist-card'

export const Specialists = async () => {
  const data = await getCollection({ collection: 'specialists' })

  return (
    <Section title={<h2>Специалисты</h2>} className="gradient-cream-to-b">
      <Container className="w-full">
        <BlockReveal start="top center" from={{ scale: 0.85 }} to={{ scale: 1 }}>
          <div className="flex flex-col gap-16 md:gap-8">
            {data.docs.map((spec, id) => (
              <SpecialistCard
                specialization={spec.specialization}
                tags={spec.tags}
                id={spec.id}
                key={spec.id}
                caption={spec.caption}
                image={spec.image}
                name={spec.name}
                isReversed={id % 2 === 1}
              />
            ))}
          </div>
        </BlockReveal>
      </Container>
    </Section>
  )
}
