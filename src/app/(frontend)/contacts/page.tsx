import { getGlobal } from '@/api/globals'
import { Contacts } from '@/components/sections/contacts'
import { Hero } from '@/components/sections/hero'
import { JsonLd } from '@/components/ui/json-ld'
import { Wait } from '@/components/ui/wait'
import { getPageMetadata } from '@/lib/metadata'
import { getBeautySalonSchema, getBreadcrumbSchema } from '@/lib/schema'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'contacts-page' })

  return getPageMetadata('/contacts', data)
}

export default async function ContactsPage() {
  const contacts = await getGlobal({ slug: 'contacts' })

  return (
    <>
      <JsonLd schema={getBeautySalonSchema(contacts)} />
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: 'Главная', url: `${process.env.NEXT_PUBLIC_URL}` },
          { name: 'Контакты', url: `${process.env.NEXT_PUBLIC_URL}/contacts` },
        ])}
      />

      <Wait>
        <Hero slug="contacts-page" />
      </Wait>

      <Wait>
        <Contacts />
      </Wait>
    </>
  )
}
