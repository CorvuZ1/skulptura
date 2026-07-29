'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { BlockReveal } from './block-reveal'
import { BeforeAfter } from '@/payload-types'
import { getImage } from '@/lib/formatters'

const DynamicReactCompareSlider = dynamic(
  () => import('react-compare-slider').then((module) => module.ReactCompareSlider),
  { ssr: false },
)

export interface IBeforeAfterSliderProps {
  items: Omit<BeforeAfter, 'updatedAt' | 'createdAt'>[]
  navigationSelector?: string
  className?: string
}

export const BeforeAfterSlider = (props: IBeforeAfterSliderProps) => {
  const { items, navigationSelector, className } = props

  return (
    <BlockReveal from={{ scale: 0.85 }} to={{ scale: 1 }}>
      <Swiper
        className={className}
        modules={[Navigation]}
        loop
        navigation={{
          enabled: true,
          prevEl: `.${navigationSelector} .swiper-button-prev`,
          nextEl: `.${navigationSelector} .swiper-button-next`,
        }}
      >
        {items.map((item) => {
          const beforeImage = getImage(item.before)
          const afterImage = getImage(item.after)

          return (
            <SwiperSlide data-block-reveal key={item.id} className="swiper-no-swiping relative">
              <DynamicReactCompareSlider
                className="w-130 aspect-square mx-auto rounded-3xl"
                itemOne={
                  <Image
                    className="h-full w-full object-cover"
                    alt={beforeImage.alt}
                    src={beforeImage.src}
                    width={800}
                    height={800}
                  />
                }
                itemTwo={
                  <Image
                    className="h-full w-full object-cover"
                    alt={afterImage.alt}
                    src={afterImage.src}
                    width={800}
                    height={800}
                  />
                }
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </BlockReveal>
  )
}
