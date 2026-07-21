'use client'

import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface TagProps {
  items: string[]
}

export const Tags = ({ items }: TagProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectedTags = searchParams.getAll('tags')

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString())

    const currentTags = params.getAll('tags')

    const newTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag]

    params.delete('tags')

    newTags.forEach((t) => params.append('tags', t))

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 items-start">
      {items.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={cn(
            'cursor-pointer rounded-full bg-gold-200/60 px-4 py-1.5 text-xs font-medium text-gold-600',
            selectedTags.includes(tag) && 'bg-gold-400 text-white border-transparent',
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
