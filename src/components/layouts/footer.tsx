import { Phone, MapPin, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { SimpleContactItem } from '@/components/ui/simple-contact-item'
import { Button } from '../ui/button'
import { ROUTES } from '@/lib/routes'
import { SocialLink } from '../ui/social-link'
import { Icon } from '../ui/icon'

export const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10 sm:pt-14 font-medium">
      <Container>
        <div className="grid grid-cols-4 md:grid-cols-1 gap-x-12 gap-y-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl mb-4 text-gold-400">Скульптура</p>
            <p className="text-charcoal-400 max-w-md text-sm">
              Косметологическая студия премиум-класса. Объединяем эстетику, доказательную медицину и
              индивидуальный подход к каждому гостю.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold tracking-wider uppercase text-gold-400 mb-5">Навигация</h4>
            <ul className="space-y-3 text-charcoal-400">
              <li>
                <Link href={ROUTES.home.href} className="hover:text-gold-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href={ROUTES.services.href} className="hover:text-gold-400 transition-colors">
                  Процедуры и товары
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contacts.href} className="hover:text-gold-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-5">
              Контакты
            </h4>
            <ul className="space-y-3 text-charcoal-400 mb-6">
              <li>
                <SimpleContactItem icon={<MapPin size={18} className="mt-0.5" />}>
                  <span>Москва, ул. Тверская, 12</span>
                </SimpleContactItem>
              </li>
              <li>
                <SimpleContactItem icon={<Phone size={18} />}>
                  <a href="tel:+74951234567" className="hover:text-gold-400 transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </SimpleContactItem>
              </li>
              <li>
                <SimpleContactItem icon={<Mail size={18} />}>
                  <a href="tel:+74951234567" className="hover:text-gold-400 transition-colors">
                    test123@mail.ru
                  </a>
                </SimpleContactItem>
              </li>
              <li>
                <SimpleContactItem icon={<Clock size={18} />}>
                  <span>09:00-21:00</span>
                </SimpleContactItem>
              </li>
            </ul>

            <ul className="flex gap-5">
              <li>
                <SocialLink href="/" icon={<Icon type="social" name="instagram" />} />
              </li>
              <li>
                <SocialLink href="/" icon={<Icon type="social" name="whats-app" />} />
              </li>
              <li>
                <SocialLink href="/" icon={<Icon type="social" name="telegram" />} />
              </li>
              <li>
                <SocialLink href="/" icon={<Icon type="social" name="max" />} />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-row md:flex-col justify-between items-center gap-x-8 gap-y-4 text-sm text-charcoal-400 md:items-start">
          <p>Все права защищены.</p>
          <a
            href="https://icher.pro"
            target="_blank"
            className="animate-background-shimmer bg-[linear-gradient(90deg,#7953cd,#00affa,#0190cd,#764ada,#7953cd)] bg-size-[500%_auto] bg-clip-text text-transparent"
          >
            Разработчик
          </a>
        </div>
      </Container>
    </footer>
  )
}
