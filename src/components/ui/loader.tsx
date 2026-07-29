import { cn } from '@/lib/utils'

export interface ILoaderProps {
  className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="animate-loader relative inline-block w-30 h-30">
        <span className="absolute inset-0 rounded-full bg-gold-500 animate-loader"></span>
        <span className="absolute inset-0 rounded-full bg-gold-500 animate-loader [animation-delay:1s]"></span>
      </div>
    </div>
  )
}
