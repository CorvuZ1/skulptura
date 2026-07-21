import type { Metadata } from 'next'
import { Hero } from '@/components/shared/hero'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export default function ContactsPage() {
  return (
    <div>
      <Hero
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={<h1>Свяжитесь с нами</h1>}
        description="Мы будем рады ответить на ваши вопросы и помочь записаться на удобное время."
      />

      <Section title={<h2>Ждем вас в гости</h2>}>
        <Container className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-12 mb-20 sm:mb-14">
            <div>
              <div className="space-y-6">
                <div data-info-item className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-200 text-gold-600">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-charcoal-400">
                      Адрес
                    </div>
                    <div className="text-charcoal-700">Улица Большая</div>
                  </div>
                </div>

                <div data-info-item className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-200 text-gold-600">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-charcoal-400">
                      Телефон
                    </div>
                    <a href="/" className="text-charcoal-700 transition-colors hover:text-gold-600">
                      +7935823582
                    </a>
                  </div>
                </div>

                <div data-info-item className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-200 text-gold-600">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-charcoal-400">
                      Email
                    </div>
                    <a href="/" className="text-charcoal-700 transition-colors hover:text-gold-600">
                      ergrtjo@mail.ru
                    </a>
                  </div>
                </div>

                <div data-info-item className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-200 text-gold-600">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-charcoal-400">
                      Часы работы
                    </div>
                    <span className="text-charcoal-700">09:00-21:00</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="/"
                  className="flex p-3 h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-charcoal-600 transition-all hover:bg-gold-500 hover:text-white"
                >
                  <Icon type="social" name="instagram" />
                </a>
                <a
                  href="/"
                  className="flex p-3 h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-charcoal-600 transition-all hover:bg-gold-500 hover:text-white"
                >
                  <Icon type="social" name="telegram" />
                </a>
                <a
                  href="/"
                  className="flex p-3 h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-charcoal-600 transition-all hover:bg-gold-500 hover:text-white"
                >
                  <Icon type="social" name="whats-app" />
                </a>
                <a
                  href="/"
                  className="flex p-3 h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-charcoal-600 transition-all hover:bg-gold-500 hover:text-white"
                >
                  <Icon type="social" name="max" />
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <div className="relative bg-charcoal-400">
              <iframe
                title="Карта"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6c03c21d1361bee60c2ae49acd67435a576f4da29fcd2978c8b3996150172f9&amp;source=constructor"
                className="h-100 md:h-80 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
