import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: string
  type: string
}

export const Icon = (props: IIconProps) => {
  const { name, width, height, type, className, ...rest } = props

  return (
    <svg className={cn('h-full w-full', className)} {...rest}>
      <use href={`/icons/${type}-sprite.svg#${name}`} />
    </svg>
  )
}
