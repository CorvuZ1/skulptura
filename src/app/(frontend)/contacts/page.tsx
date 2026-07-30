import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Contacts } from '@/components/sections/contacts'
import { getGlobal } from '@/api/globals'
import { getImage } from '@/lib/formatters'
import { Suspense } from 'react'
import { Wait } from '@/components/ui/wait'
import { getPageMetadata } from '@/lib/metadata'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'contacts-page' })

  return getPageMetadata('/contacts', data)
}

export default function ContactsPage() {
  return (
    <>
      <Wait>
        <Hero slug="contacts-page" />
      </Wait>

      <Wait>
        <Contacts />
      </Wait>
    </>
  )
}
