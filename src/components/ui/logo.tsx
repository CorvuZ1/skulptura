import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/routes'
import { Icon } from './icon'

export interface ILogoProps {
  isScrolled?: boolean
  isMobileOpen?: boolean
  className?: string
}

export const Logo = ({ isScrolled, isMobileOpen, className }: ILogoProps) => (
  <Link
    aria-label="Скульптура: студия эстетики лица и тела"
    href={ROUTES.home.href}
    className={cn(
      'flex items-center duration-500 text-white',
      (isScrolled || isMobileOpen) && 'text-black',
      className,
    )}
  >
    <Icon className="w-full" style={{ '--woman': 'gray' }} type="general" name="logo-with-text" />
  </Link>
)
