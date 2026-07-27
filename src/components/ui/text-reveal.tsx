'use client'

import { cloneElement, ReactElement, RefObject, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText, ScrollTrigger)

export interface IBlockRevealProps {
  to?: gsap.TweenVars
  from?: gsap.TweenVars
  withMask?: boolean
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>
    className: string
  }>
}

export const TextReveal = (props: IBlockRevealProps) => {
  const { children, from, to, withMask = true } = props

  const elementRef = useRef<HTMLElement>(null)

  // useGSAP(
  //   () => {
  //     if (!elementRef.current) return

  //     const q = gsap.utils.selector(elementRef.current)
  //     const text = q('[data-text-reveal]')

  //     const split = new SplitText(text, {
  //       type: 'lines',
  //       mask: withMask ? 'lines' : undefined,
  //     })

  //     gsap.set(text, { opacity: 1 })

  //     gsap.fromTo(
  //       split.lines,
  //       {
  //         opacity: 0,
  //         ...from,
  //       },
  //       {
  //         ease: 'sine.out',
  //         opacity: 1,
  //         duration: 0.8,
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: split.lines,
  //           start: 'top 80%',
  //         },
  //         ...to,
  //       },
  //     )
  //   },
  //   {
  //     scope: elementRef,
  //   },
  // )

  // return cloneElement(children, {
  //   ref: elementRef,
  // })

  return children
}
