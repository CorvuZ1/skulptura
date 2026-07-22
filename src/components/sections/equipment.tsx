import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { EquipmentCard } from '@/components/ui/equipment-card'
import { equipment } from '@/mock/equipment'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as ISwiper } from 'swiper/types'
import { cn } from '@/lib/utils'
import { SliderNav } from '../ui/slider-nav'
import { EquipmentSlider } from '../ui/equipment-slider'
import { Section } from '../ui/section'

export interface IEquipmentProps {
  name?: string
}

export const Equipment = ({ name = 'equipment' }: IEquipmentProps) => {
  return (
    <Section title={<h2>Оборудование</h2>} right={<SliderNav className={name} />}>
      <div className="mx-5 max-w-full">
        <EquipmentSlider items={equipment} navigationSelector={name} />
      </div>
    </Section>
  )
}
