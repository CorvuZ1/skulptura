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

  const borderClassName =
    'before:h-10 before:min-w-1 before:mt-2 before:mr-5 before:bg-gold-500 before:block sm:before:h-7 sm:before:mr-3'

  return (
    <section className={cn('py-20 md:py-16 sm:py-12 bg-white flex flex-col', className)}>
      {(title || description || right) && (
        <Container className="w-full flex justify-between mb-12 md:mb-10 sm:mb-8 md:flex-col md:items-start gap-8 items-center">
          <div className="max-w-2xl">
            {title && (
              <div
                className={cn(
                  'flex font-secondary tracking-wide text-5xl font-light text-charcoal-800 lg:text-5xl sm:text-4xl',
                  borderClassName,
                )}
              >
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
