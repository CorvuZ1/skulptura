import { Hero } from '@/components/sections/hero'
import { CTA } from '@/components/sections/cta'
import { Services } from '@/components/sections/services'
import { Suspense } from 'react'
import { getGlobal } from '@/api/globals'
import { getImage } from '@/lib/formatters'

export const generateMetadata = async () => {
  const data = await getGlobal({ slug: 'services-page' })

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
}

export default async function ServicesPage(props: PageProps<'/services'>) {
  const data = await getGlobal({ slug: 'services-page' })

  return (
    <div>
      <Hero
        image={data.image}
        title={<h1 className="pb-2">{data.title}</h1>}
        description={data.description || ''}
      />

      <Suspense>
        <Services searchParams={props.searchParams} />
      </Suspense>

      <Suspense>
        <CTA />
      </Suspense>
    </div>
  )
}
