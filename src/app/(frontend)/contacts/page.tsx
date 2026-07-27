import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Contacts } from '@/components/sections/contacts'
import { getGlobal } from '@/api/globals'
import { getImage } from '@/lib/formatters'
import { Suspense } from 'react'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'contacts-page' })

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
}

export default async function ContactsPage() {
  const data = await getGlobal({ slug: 'contacts-page' })

  return (
    <div>
      <Hero
        image={getImage(data.image)}
        title={<h1 className="pb-2">{data.title}</h1>}
        description={data.description || ''}
      />

      <Suspense>
        <Contacts />
      </Suspense>
    </div>
  )
}
