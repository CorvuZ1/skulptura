import { ArrowDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Image from 'next/image'
import { TextReveal } from '../ui/text-reveal'
import { getImage } from '@/lib/formatters'
import { Media } from '@/payload-types'

interface IHeroProps {
  title: ReactNode
  description?: string
  image: string | Media
  fullHeight?: boolean
  showArrow?: boolean
  className?: string
}

export const Hero = (props: IHeroProps) => {
  const { image, title, className, description, fullHeight, showArrow } = props

  const formattedImage = getImage(image)

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
          src={formattedImage.src}
          alt={formattedImage.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 via-transparent to-charcoal-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-charcoal-900/60 to-charcoal-900/50" />
      </div>

      <Container className={cn('relative z-10', fullHeight && 'py-20')}>
        <TextReveal from={{ y: 50 }} to={{ y: 0 }}>
          <div className="max-w-2xl">
            <div
              className="mb-4 font-semibold text-shadow-current font-secondary text-white text-6xl sm:text-5xl tracking-wide"
              data-text-reveal
            >
              {title}
            </div>
            {description && (
              <p className="text-lg max-w-140 leading-relaxed text-cream-100/80" data-text-reveal>
                {description}
              </p>
            )}
          </div>
        </TextReveal>
      </Container>

      {showArrow && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={30} className="text-white" />
        </div>
      )}
    </section>
  )
}
