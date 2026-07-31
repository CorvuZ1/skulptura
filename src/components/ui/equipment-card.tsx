import Image from 'next/image'
import { getImage } from '@/lib/formatters'
import { cn } from '@/lib/utils'
import { Equipment } from '@/payload-types'

export interface EquipmentCardProps extends Omit<Equipment, 'updatedAt' | 'createdAt'> {
  className?: string
}

export const EquipmentCard = (props: EquipmentCardProps) => {
  const { image, name, className } = props

  const formattedImage = getImage(image)

  return (
    <div
      data-block-reveal
      className={cn('group cursor-pointer overflow-hidden rounded-3xl bg-white', className)}
    >
      <div className="aspect-4/3 overflow-hidden relative">
        <Image
          src={formattedImage.src}
          alt={formattedImage.alt}
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-medium text-white">{name}</h3>
        </div>
      </div>
    </div>
  )
}
