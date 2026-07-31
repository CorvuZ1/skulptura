import { Metadata } from 'next'
import { getGlobal } from '@/api/globals'

export const getLayoutMetadata = (): Metadata => {
  return {
    applicationName: 'Скульптура',
    appleWebApp: {
      title: 'Скульптура',
    },
    icons: {
      icon: [
        {
          url: '/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          url: '/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
      shortcut: '/favicon.ico',
      apple: {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    },
    manifest: '/site.webmanifest',
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const getPageMetadata = <T extends 'home-page' | 'services-page' | 'contacts-page'>(
  page: string,
  data: Awaited<ReturnType<typeof getGlobal<T>>>,
): Metadata => {
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL + page,
    },
    openGraph: {
      title: data.seoTitle || '',
      description: data.seoDescription || '',
      url: process.env.NEXT_PUBLIC_URL + page,
      siteName: 'Скульптура',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Скульптура: студия эстетики лица и тела',
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      title: data.seoTitle || '',
      description: data.seoDescription || '',
      card: 'summary_large_image',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Скульптура: студия эстетики лица и тела',
        },
      ],
    },
  }
}
