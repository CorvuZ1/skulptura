import type { Contact } from '@/payload-types'

const SITE_URL = process.env.NEXT_PUBLIC_URL!

interface BeautySalonSchema {
  '@context': 'https://schema.org'
  '@type': 'BeautySalon'
  '@id': string
  name: string
  description?: string | null
  url: string
  logo?: string
  image?: string
  telephone?: string
  email?: string
  address?: {
    '@type': 'PostalAddress'
    streetAddress?: string
    addressCountry: string
  }
  openingHours?: string
  sameAs?: string[]
  priceRange?: string
}

interface ServiceSchema {
  '@context': 'https://schema.org'
  '@type': 'Service'
  name: string
  description?: string | null
  provider: {
    '@type': 'BeautySalon'
    name: string
    url: string
  }
  areaServed?: string
  serviceType?: string
  offers?: {
    '@type': 'Offer'
    price?: string
    priceCurrency: string
    availability?: string
  }[]
}

interface WebSiteSchema {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  '@id': string
  name: string
  url: string
  publisher?: {
    '@id': string
  }
  potentialAction?: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchema {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: {
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }[]
}

interface Service {
  name: string
  description?: string | null
  values: {
    key?: string | null
    value?: string | null
    id?: string | null
  }[]
  tags?: string[] | null
}

export const getBeautySalonSchema = (contacts: Contact): BeautySalonSchema => {
  const sameAs: string[] = []

  if (contacts.instagram) sameAs.push(contacts.instagram)
  if (contacts.telegram) sameAs.push(contacts.telegram)
  if (contacts.whatsapp) sameAs.push(contacts.whatsapp)
  if (contacts.max) sameAs.push(contacts.max)

  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#organization`,
    name: 'Скульптура',
    description: 'Студия эстетики лица и тела',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: contacts.phone || undefined,
    email: contacts.email || undefined,
    address: contacts.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: contacts.address,
          addressCountry: 'RU',
        }
      : undefined,
    openingHours: contacts.hours || undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    priceRange: '$$',
  }
}

export const getServiceSchema = (
  service: Service,
  businessName: string = 'Скульптура',
): ServiceSchema => {
  const offers = service.values
    .filter((v) => v.value)
    .map((v) => ({
      '@type': 'Offer' as const,
      price: v.value?.replace(/[^\d.,]/g, '') || undefined,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description || undefined,
    provider: {
      '@type': 'BeautySalon',
      name: businessName,
      url: SITE_URL,
    },
    areaServed: 'RU',
    serviceType: service.tags?.[0] || 'Косметология',
    offers: offers.length > 0 ? offers : undefined,
  }
}

export const getServicesCollectionSchema = (
  services: Service[],
  businessName: string = 'Скульптура',
): ServiceSchema[] => {
  return services.map((service) => getServiceSchema(service, businessName))
}

export const getWebSiteSchema = (): WebSiteSchema => {
  const schema: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Скульптура',
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }

  if (process.env.NEXT_PUBLIC_URL) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    }
  }

  return schema
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]): BreadcrumbSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: index < items.length - 1 ? item.url : undefined,
    })),
  }
}


