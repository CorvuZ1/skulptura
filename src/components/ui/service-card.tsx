export interface IServiceCardProps {
  title: string
  description: string
  services: {
    name: string
    price: string
  }[]
}

export const ServiceCard = (props: IServiceCardProps) => {
  const { description, services, title } = props

  return (
    <article data-block-reveal className="rounded-3xl bg-white p-6 card-shadow">
      <h3 className="font-secondary mb-1 text-2xl text-charcoal-800">{title}</h3>
      <p className="mb-3 text-sm text-charcoal-600">{description}</p>
      <div className="divide-y divide-charcoal-400/20">
        {services.map((item) => (
          <div key={item.name} className="flex items-center justify-between py-2.5 text-sm gap-2">
            <span className="text-charcoal-800">{item.name}</span>
            <span className="text-gold-600 font-medium shrink-0">{item.price}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
