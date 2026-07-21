import { ArrowDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Image from 'next/image'

interface HeroProps {
  title: ReactNode
  description?: string
  image: string
  fullHeight?: boolean
  showArrow?: boolean
  className?: string
}

export const Hero = ({
  title,
  description,
  image,
  fullHeight,
  showArrow,
  className,
}: HeroProps) => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/40 via-transparent to-charcoal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-charcoal-900/50 to-charcoal-900/40" />
      </div>

      <Container className={cn('relative z-10', fullHeight && 'py-20')}>
        <div className="max-w-2xl">
          <div className="mb-6 font-semibold text-shadow-current font-secondary text-7xl text-white lg:text-6xl sm:text-5xl">
            {title}
          </div>
          {description && (
            <p className="text-lg leading-relaxed text-cream-100/80">{description}</p>
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
