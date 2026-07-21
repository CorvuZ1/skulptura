'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { Burger } from '../ui/burger'

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Процедуры и товары' },
  { href: '/contacts', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent',
        (isScrolled || isMobileOpen) && 'bg-cream-50  shadow-lg',
      )}
    >
      <Container className="relative z-49">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'bg-white rounded-full p-3 duration-500',
              (isScrolled || isMobileOpen) && 'bg-gold-400 text-white',
            )}
          >
            <Sparkles
              size={20}
              className="group-hover:rotate-12 transition-transform duration-500"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="items-center gap-1 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-base font-medium transition-colors',
                  isScrolled
                    ? pathname === item.href
                      ? 'text-gold-600'
                      : 'text-charcoal-600 hover:text-charcoal-800'
                    : pathname === item.href
                      ? 'text-gold-400'
                      : 'text-white/90 hover:text-white',
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className={cn(
              'hidden md:flex h-15 w-15 items-center justify-center rounded-full transition-colors text-white hover:bg-white/10',
              (isScrolled || isMobileOpen) && 'text-charcoal-800 hover:bg-cream-100',
            )}
            aria-label="Меню"
          >
            <Burger isOpen={isMobileOpen} />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}

      <div
        className={cn(
          'absolute hidden left-0 right-0 md:block shadow-lg translate-y-[-100vh] bg-cream-50 duration-500',
          isMobileOpen && 'translate-y-0',
        )}
      >
        <Container>
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                onClick={() => setIsMobileOpen(false)}
                href={item.href}
                key={item.href}
                className={cn(
                  'flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-medium transition-colors text-charcoal-600 hover:bg-cream-100',
                  pathname === item.href && 'bg-gold-200 text-gold-600',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  )
}
