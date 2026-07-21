'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { beforeAfterData } from '@/mock/before-after'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { SliderNav } from './slider-nav'
import { useRef, useState } from 'react'
import { Swiper as ISwiper } from 'swiper/types'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import 'swiper/css/navigation'
import Image from 'next/image'

export const BeforeAfterSlider = () => {
  const [swiper, setSwiper] = useState<ISwiper | null>(null)

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-14 flex flex-row items-end justify-between gap-6 sm:flex-col sm:items-start">
          <div>
            <h2 className="text-6xl font-light leading-tight text-charcoal-800 lg:text-5xl sm:text-4xl">
              До и после
            </h2>
            <p className="mt-3 text-lg text-charcoal-500">Реальные результаты наших процедур</p>
          </div>
          {swiper && <SliderNav swiperInstance={swiper} />}
        </div>

        <Swiper modules={[Navigation]} onSwiper={(swiper) => setSwiper(swiper)} loop>
          {beforeAfterData.map((item) => (
            <SwiperSlide key={item.id} className="swiper-no-swiping relative">
              {swiper && (
                <ReactCompareSlider
                  className="w-130 aspect-square mx-auto rounded-3xl"
                  itemOne={
                    <Image
                      className="h-full w-full object-cover"
                      alt=""
                      width={900}
                      height={900}
                      src={item.before}
                    />
                  }
                  itemTwo={
                    <Image
                      className="h-full w-full object-cover"
                      alt=""
                      width={900}
                      height={900}
                      src={item.after}
                    />
                  }
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}
