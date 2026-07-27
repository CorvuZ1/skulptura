import { Media } from '@/payload-types'

export const getImage = (image: string | Media) => {
  if (typeof image === 'string') {
    return {
      src: image,
      alt: '',
    }
  }

  return {
    src: image.url || '',
    alt: image.alt || '',
  }
}

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
