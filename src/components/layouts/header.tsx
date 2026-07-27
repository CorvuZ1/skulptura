'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { BurgerButton } from '../ui/burger-button'
import { Logo } from '../ui/logo'
import { DesktopNav } from '../ui/desktop-nav'
import { MobileNav } from '../ui/mobile-nav'

export const Header = () => {
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
        (isScrolled || isMobileOpen) && 'bg-cream-50 card-shadow',
      )}
    >
      <Container className="relative z-49">
        <div className="flex h-20 items-center justify-between">
          <Logo isScrolled={isScrolled} isMobileOpen={isMobileOpen} className="w-35 h-18" />

          <DesktopNav isScrolled={isScrolled} pathname={pathname} />
          <BurgerButton
            className={
              isScrolled || isMobileOpen ? 'text-charcoal-800 hover:bg-cream-100' : undefined
            }
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          />
        </div>
      </Container>

      <MobileNav
        isMobileOpen={isMobileOpen}
        pathname={pathname}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  )
}
