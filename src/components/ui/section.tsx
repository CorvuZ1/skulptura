import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Container } from './container'

export interface ISectionProps {
  children: ReactNode
  title?: ReactNode
  description?: ReactNode
  right?: ReactNode
  className?: string
}

export const Section = (props: ISectionProps) => {
  const { children, title, className, description, right } = props

  return (
    <section className={cn('py-20 md:py-16 sm:py-12 bg-white flex flex-col', className)}>
      {(title || description || right) && (
        <Container className="w-full flex justify-between mb-12 md:mb-10 sm:mb-8 md:flex-col md:items-start gap-4 items-center">
          <div className="max-w-2xl">
            {title && (
              <div className="font-secondary text-6xl font-light leading-tight md:leading-none text-charcoal-800 lg:text-5xl sm:text-4xl">
                {title}
              </div>
            )}
            {description && <div className="mt-3 text-lg text-charcoal-500">{description}</div>}
          </div>
          {right}
        </Container>
      )}
      {children}
    </section>
  )
}
