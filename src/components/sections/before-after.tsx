import { getCollection } from '@/api/collections'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SliderNav } from '@/components/ui/slider-nav'

export interface IBeforeAfterProps {
  name?: string
}

export const BeforeAfter = async ({ name = 'before-after' }: IBeforeAfterProps) => {
  const data = await getCollection({ collection: 'before-after' })

  return (
    <Section title={<h2>До и После</h2>} right={<SliderNav className={name} />}>
      <Container className="w-full">
        <BeforeAfterSlider items={data.docs} navigationSelector={name} />
      </Container>
    </Section>
  )
}
