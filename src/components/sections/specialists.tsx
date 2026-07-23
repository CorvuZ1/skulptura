import { specialists } from '@/mock/specialists'
import { Container } from '../ui/container'
import { SpecialistCard } from '../ui/specialist-card'
import { Section } from '../ui/section'
import { BlockReveal } from '../ui/block-reveal'

export const Specialists = () => {
  return (
    <Section title={<h2>Специалисты</h2>} className="gradient-cream-to-b">
      <Container className="w-full">
        <BlockReveal isVerticalGroup from={{ scale: 0.85 }} to={{ scale: 1 }}>
          <div className="flex flex-col gap-16 md:gap-8">
            {specialists.map((spec, id) => (
              <SpecialistCard
                key={spec.id}
                experience={spec.experience}
                image={spec.image}
                name={spec.name}
                role={spec.role}
                specializations={spec.specializations}
                isReversed={id % 2 === 1}
              />
            ))}
          </div>
        </BlockReveal>
      </Container>
    </Section>
  )
}
