import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string
  type: string
}

export const Icon = (props: IconProps) => {
  const { name, width, height, type, className, ...rest } = props

  return (
    <svg className={cn('h-full w-full', className)} data-component="icon" {...rest}>
      <use href={`/icons/${type}-sprite.svg#${name}`} />
    </svg>
  )
}
