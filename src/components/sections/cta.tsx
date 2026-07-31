import Image from 'next/image'
import { getGlobal } from '@/api/globals'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getImage } from '@/lib/formatters'
import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

export interface ICTAProps {
  className?: string
}

export const CTA = async ({ className }: ICTAProps) => {
  const data = await getGlobal({ slug: 'cta' })

  const image = getImage(data.image)

  return (
    <Section className={cn('relative overflow-hidden', className)}>
      <Container className="w-full">
        <Image src={image.src} fill alt={image.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal-900/70" />
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 font-serif text-4xl font-light text-white ">{data.title}</h2>
            <p className="mb-10 text-lg text-cream-100/80">{data.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={ROUTES.contacts.href}>Записаться</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
