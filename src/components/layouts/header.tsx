'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { BurgerButton } from '@/components/ui/burger-button'
import { Container } from '@/components/ui/container'
import { DesktopNav } from '@/components/ui/desktop-nav'
import { Logo } from '@/components/ui/logo'
import { MobileNav } from '@/components/ui/mobile-nav'
import { cn } from '@/lib/utils'

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
