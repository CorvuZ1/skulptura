import { cn } from '@/lib/utils'

export interface IWarningProps {
  title: string
  description: string
  className?: string
}

export const Warning = (props: IWarningProps) => {
  const { title, description, className } = props

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl bg-card px-8 py-16 text-center',
        className,
      )}
    >
      <h3 className="mb-2 text-2xl font-medium">{title}</h3>

      <p className="max-w-sm text-muted-foreground">{description}</p>
    </div>
  )
}
