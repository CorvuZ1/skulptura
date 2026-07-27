import { SliderNav } from '../ui/slider-nav'
import { EquipmentSlider } from '../ui/equipment-slider'
import { Section } from '../ui/section'
import { getCollection } from '@/api/collections'

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
