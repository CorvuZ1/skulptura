'use client'

import { cloneElement, ReactElement, RefObject, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface INumberRevealProps {
  value: string
  duration?: number
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>
  }>
}

export const NumberReveal = (props: INumberRevealProps) => {
  const { children, value, duration = 4 } = props

  const elementRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!elementRef.current) return

      const numericValue = parseFloat(value)

      const suffix = value.replace(String(numericValue), '')

      const counter = { value: 0 }

      gsap.to(counter, {
        value: numericValue,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (elementRef.current) {
            elementRef.current.textContent = Math.floor(counter.value).toString() + suffix
          }
        },
      })
    },
    {
      scope: elementRef,
      dependencies: [value, duration],
    },
  )

  return cloneElement(children, {
    ref: elementRef,
  })
}
