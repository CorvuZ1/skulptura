import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface IPaginationProps {
  page: number
  totalPages: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination = (props: IPaginationProps) => {
  const {
    onPageChange,
    className,
    hasNextPage,
    hasPrevPage,
    nextPage,
    page,
    prevPage,
    totalPages,
  } = props

  const pages: (number | '...')[] = []

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)

    if (page > 3) {
      pages.push('...')
    }

    const start = Math.max(2, page - 1)
    const end = Math.min(totalPages - 1, page + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (page < totalPages - 2) {
      pages.push('...')
    }

    pages.push(totalPages)
  }

  const buttonClassName =
    'pointer-events-none text-charcoal-400/40 cursor-pointer flex h-10 min-w-10 xs:min-w-6 xs:h-6 items-center justify-center rounded-full transition-all duration-300'

  return (
    <nav className={cn('flex items-center justify-center gap-2 font-primary', className)}>
      <button
        onClick={() => hasPrevPage && onPageChange(prevPage!)}
        aria-disabled={!hasPrevPage}
        aria-label="Предыдущая страница"
        className={cn(
          buttonClassName,
          hasPrevPage && 'pointer-events-auto cursor-pointer text-charcoal-800 hover:text-gold-600',
        )}
      >
        <ChevronLeft className="w-6" />
      </button>

      {pages.map((item, index) =>
        item === '...' ? (
          <span
            key={`dots-${index}`}
            className="flex h-10 w-10 items-center justify-center text-charcoal-400"
          >
            …
          </span>
        ) : (
          <button
            aria-label={`Перейти на страницу: ${item}`}
            key={item}
            onClick={() => onPageChange(item)}
            className={cn(
              'cursor-pointer flex h-10 min-w-10 xs:min-w-8 xs:h-8 items-center justify-center rounded-full border text-md font-medium transition-all duration-300',
              page === item
                ? 'border-gold-500 bg-gold-500 text-white'
                : 'border-charcoal-400/20 text-charcoal-800 hover:border-gold-500 hover:text-gold-600',
            )}
          >
            {item}
          </button>
        ),
      )}

      <button
        onClick={() => hasNextPage && onPageChange(nextPage!)}
        aria-disabled={!hasNextPage}
        aria-label="Следующая страница"
        className={cn(
          buttonClassName,
          hasNextPage && 'pointer-events-auto text-charcoal-800 hover:text-gold-600',
        )}
      >
        <ChevronRight className="w-6" />
      </button>
    </nav>
  )
}
