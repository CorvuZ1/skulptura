'use client'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/routes'
import Image from 'next/image'
import { Section } from '../ui/section'
import { Container } from '../ui/container'

export const CTA = () => {
  return (
    <Section className="relative overflow-hidden">
      <Container className="w-full">
        <Image
          src="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
          fill
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/70" />
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 font-serif text-4xl font-light text-white ">
              Начните путь к совершенству
            </h2>
            <p className="mb-10 text-lg text-cream-100/80">
              Запишитесь на бесплатную консультацию и получите индивидуальный план ухода за кожей.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={ROUTES.contacts.href}>Записаться</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
