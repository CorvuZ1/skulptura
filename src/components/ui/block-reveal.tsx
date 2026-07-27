'use client'

import { cloneElement, ReactElement, RefObject, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export interface IBlockRevealProps {
  isVerticalGroup?: boolean
  to?: gsap.TweenVars
  from?: gsap.TweenVars
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>
    className: string
  }>
}

export const BlockReveal = (props: IBlockRevealProps) => {
  const { children, isVerticalGroup, from, to } = props

  const elementRef = useRef<HTMLElement>(null)

  // useGSAP(
  //   () => {
  //     if (!elementRef.current) return

  //     const q = gsap.utils.selector(elementRef.current)
  //     const blocks = q('[data-block-reveal]')

  //     ScrollTrigger.batch(blocks, {
  //       start: isVerticalGroup ? 'top center' : 'top 85%',
  //       once: true,
  //       onEnter: (batch) => {
  //         gsap.fromTo(
  //           batch,
  //           {
  //             opacity: 0,
  //             ...from,
  //           },
  //           {
  //             opacity: 1,
  //             duration: 0.8,
  //             stagger: 0.2,
  //             ...to,
  //           },
  //         )
  //       },
  //     })
  //   },
  //   {
  //     scope: elementRef,
  //     revertOnUpdate: true,
  //   },
  // )

  // return cloneElement(children, {
  //   ref: elementRef,
  // })

  return children
}
