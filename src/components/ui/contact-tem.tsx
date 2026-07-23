import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export interface IContactItemProps {
  icon: ReactNode
  label: string
  children: ReactNode
  className?: string
}

export const ContactItem = (props: IContactItemProps) => {
  const { icon, label, children, className } = props

  return (
    <div className={cn('flex items-start gap-4', className)}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-200 text-gold-600">
        {icon}
      </div>
      <div>
        <div className="mb-1 text-xs uppercase tracking-wider text-charcoal-400">{label}</div>
        {children}
      </div>
    </div>
  )
}
