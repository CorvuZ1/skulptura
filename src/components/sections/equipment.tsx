import { getCollection } from '@/api/collections'
import { EquipmentSlider } from '@/components/ui/equipment-slider'
import { Section } from '@/components/ui/section'
import { SliderNav } from '@/components/ui/slider-nav'

export interface IEquipmentProps {
  name?: string
}

export const Equipment = async ({ name = 'equipment' }: IEquipmentProps) => {
  const data = await getCollection({ collection: 'equipment' })

  return (
    <Section title={<h2>Оборудование</h2>} right={<SliderNav className={name} />}>
      <div className="mx-5 max-w-full">
        <EquipmentSlider items={data.docs} navigationSelector={name} />
      </div>
    </Section>
  )
}
