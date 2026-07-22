'use client'

import { SwiperClass, SwiperRef, useSwiper } from 'swiper/react'
import { RefObject, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ISliderNavProps {
  className?: string
}

export const SliderNav = ({ className }: ISliderNavProps) => {
  return (
    <div className={cn('flex gap-4', className)}>
      <button
        className="swiper-button-prev cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-400 text-charcoal-600 transition-colors hover:border-gold-500 hover:text-gold-600 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Предыдущий"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        className="swiper-button-next cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-400 text-charcoal-600 transition-colors hover:border-gold-500 hover:text-gold-600 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Следующий"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
