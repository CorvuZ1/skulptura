import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
          fill
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/70" />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-light text-white sm:text-5xl">
            Начните путь к совершенству
          </h2>
          <p className="mb-10 text-lg text-cream-100/80">
            Запишитесь на бесплатную консультацию и получите индивидуальный план ухода за кожей.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contacts">Записаться</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
