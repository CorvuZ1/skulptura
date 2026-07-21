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

export const EquipmentSlider = () => {
  const [swiper, setSwiper] = useState<ISwiper | null>(null)

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-14 flex flex-row items-end justify-between gap-6 sm:flex-col sm:items-start">
          <h2 className="text-6xl font-light leading-tight text-charcoal-800 lg:text-5xl sm:text-4xl">
            Оборудование
          </h2>
          {swiper && <SliderNav swiperInstance={swiper} />}
        </div>
      </Container>
      <div className="mx-5">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1248: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          loop
        >
          {equipment.map((item) => (
            <SwiperSlide key={item.id} className={cn('opacity-0', swiper && 'opacity-100')}>
              <EquipmentCard image={item.image} name={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
