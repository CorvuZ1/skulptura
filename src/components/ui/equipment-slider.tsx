'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { EquipmentCard } from '@/components/ui/equipment-card'
import { equipment } from '@/mock/equipment'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { Swiper as ISwiper } from 'swiper/types'
import { SliderNav } from './slider-nav'
import { cn } from '@/lib/utils'
import { Navigation } from 'swiper/modules'
import { BlockReveal } from './block-reveal'

export interface IEquipmentSliderProps {
  items: {
    id: string
    image: string
    name: string
  }[]
  navigationSelector?: string
  className?: string
}

export const EquipmentSlider = (props: IEquipmentSliderProps) => {
  const { items, navigationSelector, className } = props

  return (
    <BlockReveal from={{ x: -50 }} to={{ x: 0 }}>
      <Swiper
        className={className}
        modules={[Navigation]}
        navigation={{
          enabled: true,
          prevEl: `.${navigationSelector} .swiper-button-prev`,
          nextEl: `.${navigationSelector} .swiper-button-next`,
        }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1248: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <EquipmentCard image={item.image} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BlockReveal>
  )
}
