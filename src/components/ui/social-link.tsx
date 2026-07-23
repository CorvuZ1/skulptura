import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export interface ISocialLinkProps {
  className?: string
  href: string
  isBubble?: boolean
  icon: ReactNode
}

export const SocialLink = (props: ISocialLinkProps) => {
  const { href, className, icon, isBubble } = props

  const bubbleStyles =
    'p-3 h-11 w-11 bg-cream-200 text-charcoal-600 transition-all hover:bg-gold-500 hover:text-white'

  return (
    <a
      href={href}
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
