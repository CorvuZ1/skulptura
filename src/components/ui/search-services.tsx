'use client'

import { ReactNode, useCallback, useRef, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import debounce from 'lodash/debounce'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import { IPaginationProps, Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search'
import { Tags } from '@/components/ui/tags'
import { ROUTES } from '@/lib/routes'

export interface ISearchServicesProps {
  tags: string[]
  className?: string
  children: ReactNode
  pagination: Omit<IPaginationProps, 'onPageChange'>
}

export const SearchServices = (props: ISearchServicesProps) => {
  const { tags, className, children, pagination } = props

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const inputRef = useRef<HTMLInputElement>(null)
  const params = useRef(new URLSearchParams(searchParams.toString()))
  const [isPending, startTransition] = useTransition()

  const resetParams = () => {
    params.current.delete('tags')
    params.current.delete('page')
    params.current.delete('search')
  }

  const navigate = useCallback(
    (url: string) => {
      startTransition(() => {
        router.replace(url, { scroll: false })
      })
      scrollTo({ top: 0 })
    },
    [router],
  )

  const handlePageChange = (page: number) => {
    params.current.delete('page')

    params.current.set('page', `${page}`)
    navigate(`${pathname}?${params.current.toString()}`)
  }

  const onSearchChange = useCallback(
    debounce((search: string) => {
      params.current.delete('search')
      params.current.set('page', '1')

      params.current.set('search', search)
      navigate(`${pathname}?${params.current.toString()}`)
    }, 400),
    [searchParams, pathname, navigate],
  )

  const toggleTag = (tag: string) => {
    const currentTags = params.current.getAll('tags')

    const newTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag]

    params.current.delete('tags')
    params.current.set('page', '1')

    newTags.forEach((t) => params.current.append('tags', t))

    navigate(`${pathname}?${params.current.toString()}`)
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

      <div className="flex gap-3 items-start justify-between mb-6 md:flex-col">
        <Tags toggleTag={toggleTag} selectedTags={selectedTags} items={tags} />
        {searchParams.size > 0 && (
          <Button
            onClick={() => {
              inputRef.current && (inputRef.current.value = '')

              resetParams()

              navigate(ROUTES.services.href)
            }}
          >
            Очистить
          </Button>
        )}
      </div>

      {isPending ? (
        <Loader />
      ) : (
        <div>
          {children}
          {pagination.totalPages > 1 && (
            <Pagination
              className="mt-10"
              page={pagination.page}
              totalPages={pagination.totalPages}
              hasPrevPage={pagination.hasPrevPage}
              hasNextPage={pagination.hasNextPage}
              prevPage={pagination.prevPage}
              nextPage={pagination.nextPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </div>
  )
}
