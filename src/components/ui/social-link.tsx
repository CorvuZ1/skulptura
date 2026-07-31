import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ISocialLinkProps {
  className?: string
  href: string
  isBubble?: boolean
  icon: ReactNode
  ariaLabel?: string
}

export const SocialLink = (props: ISocialLinkProps) => {
  const { href, className, icon, isBubble, ariaLabel } = props

  const bubbleStyles =
    'p-3 h-11 w-11 bg-cream-200 text-charcoal-600 transition-all hover:bg-gold-500 hover:text-white'

  return (
    <a
      target="_blank"
      href={href}
      aria-label={ariaLabel}
      className={cn(
        'flex h-6 w-6 items-center justify-center rounded-full text-charcoal-400 hover:text-gold-400 transition-colors',
        isBubble && bubbleStyles,
        className,
      )}
    >
      {icon}
    </a>
  )
}
