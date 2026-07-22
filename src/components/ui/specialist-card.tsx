import { cn } from '@/lib/utils'
import type { Specialist } from '@/mock/specialists'

export interface ISpecialistCardProps {
  name: string
  role: string
  experience: string
  specializations: string[]
  image: string
  isReversed?: boolean
}

export const SpecialistCard = (props: ISpecialistCardProps) => {
  const { experience, image, name, role, specializations, isReversed } = props

  return (
    <div className="flex sm:flex-col items-center gap-10 sm:gap-7 rounded-3xl sm:items-start">
      <div className={cn('w-1/3 sm:w-full shrink-0', isReversed && 'order-2 sm:order-none')}>
        <div className="card-shadow relative aspect-square overflow-hidden rounded-3xl">
          <img
            src={'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png'}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
        </div>
      </div>
      <div className={cn('flex-1 sm:p-4 sm:pt-0', isReversed && 'text-right sm:text-left')}>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-2 ">
          {experience}
        </p>
        <h3 className="font-secondary text-4xl md:text-3xl font-medium text-charcoal-800 mb-2">
          {name}
        </h3>
        <p className="text-lg md:text-base text-charcoal-600 mb-6">{role}</p>
        <div className={cn('flex flex-wrap gap-2', isReversed && 'justify-end sm:justify-start')}>
          {specializations.map((s) => (
            <span
              key={s}
              className="rounded-full bg-gold-200/60 px-4 py-1.5 text-xs font-medium text-gold-600"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
