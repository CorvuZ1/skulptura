import { Container } from '../ui/container'
import { NumberReveal } from '../ui/number-reveal'
import { Section } from '../ui/section'

export const Stats = () => {
  return (
    <Section className="bg-charcoal-800">
      <Container className="relative">
        <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 text-center">
          {[
            { value: '15', label: 'лет на рынке' },
            { value: '500+', label: 'довольных клиентов' },
            { value: '50+', label: 'видов процедур' },
            { value: '4.9', label: 'средняя оценка' },
          ].map((stat) => (
            <div key={stat.label}>
              <NumberReveal value={stat.value}>
                <div className="mb-2 text-5xl font-light text-gold-400 lg:text-5xl">0</div>
              </NumberReveal>
              <div className="text-sm uppercase tracking-wider text-cream-100/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
