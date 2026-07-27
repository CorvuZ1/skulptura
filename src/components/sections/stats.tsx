import { getCollection } from '@/api/collections'
import { Container } from '../ui/container'
import { NumberReveal } from '../ui/number-reveal'
import { Section } from '../ui/section'

export const Stats = async () => {
  const data = await getCollection({ collection: 'stats' })

  return (
    <Section className="bg-charcoal-800">
      <Container className="relative">
        <div className="flex items-center flex-wrap justify-center gap-8 text-center">
          {data.docs.map((stat) => (
            <div key={stat.id}>
              <NumberReveal value={stat.value}>
                <div className="mb-2 text-5xl font-light text-gold-400 lg:text-5xl">0</div>
              </NumberReveal>
              <div className="text-sm uppercase tracking-wider text-cream-100/60">{stat.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
