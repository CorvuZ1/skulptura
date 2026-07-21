import { Clock } from 'lucide-react'

interface PostCardProps {
  image: string
  title: string
  description: string
  category: string
  date: string
  price: string
}

export const PostCard = ({ image, title, description, category, date, price }: PostCardProps) => {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-3xl bg-cream-50 card-shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-charcoal-800 backdrop-blur-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-medium text-charcoal-800">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-charcoal-600">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-charcoal-400">
            <Clock size={12} className="mr-1 inline" />
            {date}
          </span>
          <span className="text-lg font-medium text-gold-600">{price}</span>
        </div>
      </div>
    </article>
  )
}
