import type { ReactNode } from 'react'

export interface ISimpleContactItemProps {
  icon: ReactNode
  children: ReactNode
}

export const SimpleContactItem = (props: ISimpleContactItemProps) => {
  const { icon, children } = props

  return (
    <div className="flex items-center gap-3">
      <span className="text-gold-500 shrink-0">{icon}</span>
      {children}
    </div>
  )
}
