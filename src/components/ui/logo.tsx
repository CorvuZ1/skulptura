import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/routes'
import { Icon } from './icon'

export interface ILogoProps {
  isScrolled: boolean
  isMobileOpen: boolean
}

export const Logo = ({ isScrolled, isMobileOpen }: ILogoProps) => (
  <Link
    href={ROUTES.home.href}
    className={cn(
      'bg-white rounded-full flex items-center duration-500 p-2',
      (isScrolled || isMobileOpen) && 'bg-gold-400 text-white',
    )}
  >
    <Icon className="w-12 h-12" type="general" name="logo" />
  </Link>
)
