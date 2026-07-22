'use client'

import { Search as SearchIcon } from 'lucide-react'
import { ChangeEvent, RefObject } from 'react'
import Form from 'next/form'
import { cn } from '@/lib/utils'

export interface ISearchProps {
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  inputRef?: RefObject<HTMLInputElement | null>
  className?: string
}

export const Search = (props: ISearchProps) => {
  const { className, defaultValue, inputRef, onChange } = props

  return (
    <Form action="" className={cn('relative', className)}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

      <input
        name="search"
        defaultValue={defaultValue}
        onChange={onChange}
        ref={inputRef}
        placeholder="Поиск"
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
      />
    </Form>
  )
}
