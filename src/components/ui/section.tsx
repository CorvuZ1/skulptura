import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export interface ISectionProps {
  children: ReactNode
  title: ReactNode
  description?: ReactNode
  right?: ReactNode
  className?: string
}

export const Section = (props: ISectionProps) => {
  const { children, title, className, description, right } = props

  return (
    <section className={cn('py-20 bg-white flex justify-between gap-x-5 gap-y-3', className)}>
      <div>
        <div className="text-6xl font-light leading-tight text-charcoal-800 lg:text-5xl sm:text-4xl">
          {title}
        </div>
        {description && <div className="mt-3 text-lg text-charcoal-500">{description}</div>}
      </div>
      {right}
      {children}
    </section>
  )
}
