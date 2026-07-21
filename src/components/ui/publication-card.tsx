interface ServiceItem {
  name: string
  price: string
}

interface PublicationCardProps {
  title: string
  description: string
  services: ServiceItem[]
}

export const PublicationCard = ({ description, services, title }: PublicationCardProps) => {
  return (
    <article className="rounded-3xl bg-white p-6 transition-all duration-300 card-shadow">
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
