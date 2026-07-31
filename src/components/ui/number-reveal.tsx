'use client'

import { cloneElement, ReactElement, RefObject, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface INumberRevealProps {
  value: string
  duration?: number
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>
  }>
}

export const NumberReveal = (props: INumberRevealProps) => {
  const { children, value, duration = 3 } = props

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
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 100%',
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
    },
  )

  return cloneElement(children, {
    ref: elementRef,
  })
}
