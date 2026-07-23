import { cn } from '@/lib/utils'
import Image from 'next/image'

interface EquipmentCardProps {
  name: string
  image: string
  className?: string
}

export const EquipmentCard = (props: EquipmentCardProps) => {
  const { image, name, className } = props

  return (
    <div
      data-block-reveal
      className={cn('group cursor-pointer overflow-hidden rounded-3xl bg-white', className)}
    >
      <div className="aspect-4/3 overflow-hidden relative">
        <Image
          src={image}
          alt={name}
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
