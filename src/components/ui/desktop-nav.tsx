import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ROUTES_ARRAY } from '@/lib/routes'

export interface IDesktopNavProps {
  isScrolled: boolean
  pathname: string
}

export const DesktopNav = (props: IDesktopNavProps) => {
  const { isScrolled, pathname } = props

  return (
    <nav className="items-center gap-1 md:hidden">
      {ROUTES_ARRAY.map((item) => {
        const isPathMatch = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative px-4 py-2 text-base font-medium transition-colors',
              isScrolled
                ? isPathMatch
                  ? 'text-gold-600'
                  : 'text-charcoal-600 hover:text-charcoal-800'
                : isPathMatch
                  ? 'text-gold-400'
                  : 'text-white/90 hover:text-white',
            )}
          >
            {item.label}
            {isPathMatch && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
