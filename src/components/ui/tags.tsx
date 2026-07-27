import { cn } from '@/lib/utils'

interface ITagsProps {
  items: string[]
  toggleTag: (tag: string) => void
  selectedTags: string[]
}

export const Tags = ({ items, toggleTag, selectedTags }: ITagsProps) => {
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
