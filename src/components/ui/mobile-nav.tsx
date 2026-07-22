import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ROUTES_ARRAY } from '@/lib/routes'
import { Container } from '@/components/ui/container'

export interface IMobileNavProps {
  isMobileOpen: boolean
  pathname: string
  onClose: () => void
}

export const MobileNav = (props: IMobileNavProps) => {
  const { isMobileOpen, pathname, onClose } = props

  return (
    <div
      className={cn(
        'absolute hidden left-0 right-0 md:block shadow-lg translate-y-[-100vh] bg-cream-50 duration-500',
        isMobileOpen && 'translate-y-0',
      )}
    >
      <Container>
        <nav className="flex flex-col py-4">
          {ROUTES_ARRAY.map((item) => {
            const isPathMatch = pathname === item.href

            return (
              <Link
                onClick={onClose}
                href={item.href}
                key={item.href}
                className={cn(
                  'flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-medium transition-colors text-charcoal-600 hover:bg-cream-100',
                  isPathMatch && 'bg-gold-200 text-gold-600',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </Container>
    </div>
  )
}
