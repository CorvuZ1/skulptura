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

export interface ISearchFiltersProps {
  tags: string[]
  className?: string
}

export const SearchFilters = ({ tags, className }: ISearchFiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSearchChange = useCallback(
    debounce((search: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('search', search)
      router.replace(`${pathname}?${params.toString()}`)
    }, 400),
    [searchParams],
  )

  return (
    <div className={className}>
      <Search
        inputRef={inputRef}
        defaultValue={searchParams.get('search') || ''}
        onChange={({ target }) => onSearchChange(target.value)}
        className="mb-3"
      />

      <div className="flex">
        <Tags items={tags} />
        <Button
          href="/services"
          replace
          className="ml-auto"
          onClick={() => {
            inputRef.current && (inputRef.current.value = '')
          }}
        >
          Очистить
        </Button>
      </div>
    </div>
  )
}
