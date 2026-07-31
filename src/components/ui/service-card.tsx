import { Service } from '@/payload-types'

export interface IServiceCardProps extends Omit<Service, 'tags' | 'createdAt' | 'updatedAt'> {}

export const ServiceCard = (props: IServiceCardProps) => {
  const { description, name, values } = props

  return (
    <article data-block-reveal className="rounded-3xl bg-white p-6 card-shadow sm:p-4">
      <h3 className="font-secondary mb-1 text-2xl text-charcoal-800 truncate">{name}</h3>
      <p className="mb-3 text-sm text-charcoal-600">{description}</p>
      <div className="divide-y divide-charcoal-400/20">
        {values.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2.5 text-sm gap-2">
            <span className="text-charcoal-800">{item.key}</span>
            <span className="text-gold-600 font-medium shrink-0">{item.value}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
