'use client'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BlockReveal } from '@/components/ui/block-reveal'
import { EquipmentCard, EquipmentCardProps } from '@/components/ui/equipment-card'

export interface IEquipmentSliderProps {
  items: EquipmentCardProps[]
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
            <EquipmentCard id={item.id} image={item.image} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BlockReveal>
  )
}
