import { getImage } from '@/lib/formatters'
import { cn } from '@/lib/utils'
import { Specialist } from '@/payload-types'
import Image from 'next/image'

export interface ISpecialistCardProps extends Omit<Specialist, 'createdAt' | 'updatedAt'> {
  isReversed?: boolean
}

export const SpecialistCard = (props: ISpecialistCardProps) => {
  const { caption, isReversed, name, specialization, image, tags } = props

  const formattedImage = getImage(image)

  return (
    <div
      data-block-reveal
      className="flex sm:flex-col items-center gap-10 md:gap-5 rounded-3xl sm:items-start"
    >
      <div className={cn('w-1/3 sm:w-full shrink-0', isReversed && 'order-2 sm:order-none')}>
        <div className="card-shadow relative aspect-square overflow-hidden rounded-3xl">
          <Image
            width={600}
            height={600}
            src={formattedImage.src}
            alt={formattedImage.alt}
            className="h-full w-full object-cover transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
        </div>
      </div>
      <div className={cn('flex-1 max-w-full min-w-0', isReversed && 'text-right sm:text-left')}>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-2 ">
          {caption}
        </p>
        <h3 className="truncate font-secondary text-4xl md:text-3xl font-medium text-charcoal-800 mb-2">
          {name}
        </h3>
        <p className="text-lg md:text-base text-charcoal-600 mb-6">{specialization}</p>
        <div className={cn('flex flex-wrap gap-2', isReversed && 'justify-end sm:justify-start')}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gold-200/60 px-4 py-1.5 text-xs font-medium text-gold-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
