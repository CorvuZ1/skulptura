import { Media } from '@/payload-types'

export const getImage = (image: string | Media) => {
  if (typeof image === 'string') {
    return image
  }

  return image.url!
}

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
