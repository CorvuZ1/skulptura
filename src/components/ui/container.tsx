import { cn } from '@/lib/utils'

export interface IContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = (props: IContainerProps) => {
  const { children, className } = props

  return (
    <div
      data-component="container"
      className={cn('mx-auto max-w-7xl px-12 lg:px-8 sm:px-5', className)}
    >
      {children}
    </div>
  )
}
