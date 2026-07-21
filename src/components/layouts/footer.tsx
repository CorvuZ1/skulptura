import { Phone, MapPin, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icon'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10 sm:pt-14 font-medium">
      <Container>
        <div className="grid grid-cols-4 md:grid-cols-1 gap-x-12 gap-y-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl mb-4 text-gold-400">Lumière</h3>
            <p className="text-charcoal-400 max-w-md text-sm">
              Косметологическая студия премиум-класса. Объединяем эстетику, доказательную медицину и
              индивидуальный подход к каждому гостю.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold tracking-wider uppercase text-gold-400 mb-5">Навигация</h4>
            <ul className="space-y-3 text-charcoal-400">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Процедуры и товары
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-gold-400 transition-colors">
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
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span>Москва, ул. Тверская, 12</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="tel:+74951234567" className="hover:text-gold-400 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <a href="tel:+74951234567" className="hover:text-gold-400 transition-colors">
                  test123@mail.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold-500 shrink-0" />
                <span>09:00-21:00</span>
              </li>
            </ul>
            <div className="flex gap-5">
              <a
                href="/"
                className="flex h-6 w-6 items-center justify-center rounded-full text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <Icon type="social" name="instagram" />
              </a>
              <a
                href="/"
                className="flex h-6 w-6 items-center justify-center rounded-full text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <Icon type="social" name="telegram" />
              </a>
              <a
                href="/"
                className="flex h-6 w-6 items-center justify-center rounded-full text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <Icon type="social" name="whats-app" />
              </a>
              <a
                href="/"
                className="flex h-6 w-6 items-center justify-center rounded-full text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <Icon type="social" name="max" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-row md:flex-col justify-between items-center gap-x-8 gap-y-4 text-sm text-charcoal-400 md:items-start">
          <p>© 2026 Lumière. Все права защищены.</p>
          <p>Лицензия на медицинскую деятельность № ЛО-77-01-019823</p>
          <a href="https://icher.pro" target="_blank" className="animate-color-flow">
            Разработчик
          </a>
        </div>
      </Container>
    </footer>
  )
}
