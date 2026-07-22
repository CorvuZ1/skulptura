'use client'

import { Search as SearchIcon, ArrowDownUp, X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useRef } from 'react'
import debounce from 'lodash/debounce'
import Form from 'next/form'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { Search } from './search'
import { Tags } from './tags'
import { ROUTES } from '@/lib/routes'

export interface ISearchFiltersProps {
  tags: string[]
  className?: string
}

export const SearchFilters = (props: ISearchFiltersProps) => {
  const { tags, className } = props

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSearchChange = useCallback(
    debounce((search: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('search', search)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }, 400),
    [searchParams],
  )

  return (
    <div className={className}>
      <Search
        inputRef={inputRef}
        defaultValue={searchParams.get('search') || ''}
        onChange={({ target }) => onSearchChange(target.value)}
        className="mb-4"
      />

      <div className="flex flex-wrap gap-3 items-start justify-between">
        <Tags items={tags} />
        {searchParams.size > 0 && (
          <Button
            href={ROUTES.services.href}
            scroll={false}
            replace
            onClick={() => {
              inputRef.current && (inputRef.current.value = '')
            }}
          >
            Очистить
          </Button>
        )}
      </div>
    </div>
  )
}
