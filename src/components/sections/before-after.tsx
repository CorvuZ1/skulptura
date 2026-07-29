import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Swiper as ISwiper } from 'swiper/types'
import { ReactCompareSlider } from 'react-compare-slider'
import Image from 'next/image'
import { SliderNav } from '../ui/slider-nav'
import { BeforeAfterSlider } from '../ui/before-after-slider'
import { Section } from '../ui/section'
import { getCollection } from '@/api/collections'

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
