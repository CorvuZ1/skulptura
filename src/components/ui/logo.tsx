import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/routes'

type LogoProps = {
  isScrolled: boolean
  isMobileOpen: boolean
}

export const Logo = ({ isScrolled, isMobileOpen }: LogoProps) => (
  <Link
    href={ROUTES.home.href}
    className={cn(
      'bg-white rounded-full p-3 duration-500',
      (isScrolled || isMobileOpen) && 'bg-gold-400 text-white',
    )}
  >
    <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-500" />
  </Link>
)
