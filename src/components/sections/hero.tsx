import { ArrowDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Image from 'next/image'

interface IHeroProps {
  title: ReactNode
  description?: string
  image: string
  fullHeight?: boolean
  showArrow?: boolean
  className?: string
}

export const Hero = (props: IHeroProps) => {
  const { image, title, className, description, fullHeight, showArrow } = props

  return (
    <section
      className={cn(
        'relative flex items-center overflow-hidden',
        fullHeight ? 'min-h-dvh' : 'min-h-150 md:min-h-130 py-20',
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          fetchPriority="high"
          loading="eager"
          fill
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 via-transparent to-charcoal-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-charcoal-900/60 to-charcoal-900/50" />
      </div>

      <Container className={cn('relative z-10', fullHeight && 'py-20')}>
        <div className="max-w-2xl">
          <div className="mb-6 font-semibold text-shadow-current font-secondary text-white text-6xl sm:text-5xl tracking-wide">
            {title}
          </div>
          {description && (
            <p className="text-lg max-w-140 leading-relaxed text-cream-100/80">{description}</p>
          )}
        </div>
      </Container>

      {showArrow && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={30} className="text-white" />
        </div>
      )}
    </section>
  )
}
