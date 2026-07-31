'use client'

import { type ButtonHTMLAttributes,ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import { cn } from '@/lib/utils'

interface IBaseButtonProps {
  variant?: 'primary' | 'ghost' | 'outline'
  children: ReactNode
  className?: string
}

type ButtonType = IBaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type LinkType = IBaseButtonProps & LinkProps

type ButtonPropsType = ButtonType | LinkType

export const Button = (props: ButtonPropsType) => {
  const { variant = 'primary', children, className } = props
  const { href, ...linkRest } = props as LinkType
  const { ...buttonRest } = props as ButtonType

  const variantStyles = {
    primary:
      'bg-gold-500 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-gold-600 active:scale-[0.98]',
    ghost:
      'px-6 py-2.5 text-sm font-medium text-charcoal-600 transition-colors hover:text-gold-600',
    outline:
      'border border-charcoal-400 bg-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-charcoal-800 transition-all duration-300 hover:border-gold-500 hover:text-gold-600 active:scale-[0.98]',
  }

  const baseClasses = 'cursor-pointer inline-flex items-center justify-center rounded-full'

  const classes = cn(baseClasses, variantStyles[variant], className)

  if (href) {
    return (
      <Link {...linkRest} href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button {...buttonRest} className={classes}>
      {children}
    </button>
  )
}
