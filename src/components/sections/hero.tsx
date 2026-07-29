import { ArrowDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Image from 'next/image'
import { TextReveal } from '../ui/text-reveal'
import { getImage } from '@/lib/formatters'
import { Media } from '@/payload-types'
import { getGlobal } from '@/api/globals'

interface IHeroProps {
  slug: 'home-page' | 'services-page' | 'contacts-page'
  fullHeight?: boolean
  showArrow?: boolean
  className?: string
}

export const Hero = async (props: IHeroProps) => {
  const { className, fullHeight, showArrow, slug } = props

  const data = await getGlobal({ slug })

  const formattedImage = getImage(data.image)

  const title =
    slug === 'home-page' ? (
      <div className="animate-background-shimmer pb-2 bg-[linear-gradient(90deg,#d49a2e,#f4e3b8,#d49a2e)] bg-size-[500%_auto] bg-clip-text text-transparent">
        {data.title}
      </div>
    ) : (
      <h1 className="pb-2">{data.title}</h1>
    )

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
            {data.description && (
              <p className="text-lg max-w-140 leading-relaxed text-cream-100/80" data-text-reveal>
                {data.description}
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
