'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useRef } from 'react'
import debounce from 'lodash/debounce'
import { Button } from './button'
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

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString())

    const currentTags = params.getAll('tags')

    const newTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag]

    params.delete('tags')

    newTags.forEach((t) => params.append('tags', t))

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const selectedTags = searchParams.getAll('tags')

  return (
    <div className={className}>
      <Search
        inputRef={inputRef}
        defaultValue={searchParams.get('search') || ''}
        onChange={({ target }) => onSearchChange(target.value)}
        className="mb-4"
      />

      <div className="flex flex-wrap gap-3 items-start justify-between">
        <Tags toggleTag={toggleTag} selectedTags={selectedTags} items={tags} />
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
