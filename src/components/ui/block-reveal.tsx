'use client'

import { cloneElement, ReactElement, RefObject, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface IBlockRevealProps {
  start?: string
  to?: gsap.TweenVars
  from?: gsap.TweenVars
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>
    className: string
  }>
}

export const BlockReveal = (props: IBlockRevealProps) => {
  const { children, from, to, start = 'top 85%' } = props

  const elementRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!elementRef.current) return

      const q = gsap.utils.selector(elementRef.current)
      const blocks = q('[data-block-reveal]')

      ScrollTrigger.batch(blocks, {
        start,
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              opacity: 0,
              ...from,
            },
            {
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ...to,
            },
          )
        },
      })
    },
    {
      scope: elementRef,
      dependencies: [children],
    },
  )

  return cloneElement(children, {
    ref: elementRef,
  })
}
