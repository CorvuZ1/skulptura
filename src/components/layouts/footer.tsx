import { Phone, MapPin, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { SimpleContactItem } from '@/components/ui/simple-contact-item'
import { Button } from '../ui/button'
import { ROUTES } from '@/lib/routes'
import { SocialLink } from '../ui/social-link'
import { Icon } from '../ui/icon'
import { Logo } from '../ui/logo'
import { getGlobal } from '@/api/globals'

export const Footer = async () => {
  const [
    { caption, description },
    { address, email, hours, phone, instagram, max, telegram, whatsapp },
  ] = await Promise.all([
    getGlobal({
      slug: 'footer',
    }),
    getGlobal({
      slug: 'contacts',
    }),
  ])

  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10 sm:pt-14 font-medium">
      <Container>
        <div className="grid grid-cols-4 md:grid-cols-1 gap-x-12 gap-y-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4 w-35 h-18" />
            <p className="text-charcoal-400 max-w-md text-sm">{description}</p>
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
              {address && (
                <li>
                  <SimpleContactItem icon={<MapPin size={18} className="mt-0.5" />}>
                    <address className="not-italic">{address}</address>
                  </SimpleContactItem>
                </li>
              )}
              {phone && (
                <li>
                  <SimpleContactItem icon={<Phone size={18} />}>
                    <a href={`tel:${phone}`} className="hover:text-gold-400 transition-colors">
                      {phone}
                    </a>
                  </SimpleContactItem>
                </li>
              )}
              {email && (
                <li>
                  <SimpleContactItem icon={<Mail size={18} />}>
                    <a href={`mailto:${email}`} className="hover:text-gold-400 transition-colors">
                      {email}
                    </a>
                  </SimpleContactItem>
                </li>
              )}
              {hours && (
                <li>
                  <SimpleContactItem icon={<Clock size={18} />}>
                    <time>{hours}</time>
                  </SimpleContactItem>
                </li>
              )}
            </ul>

            <ul className="flex gap-5">
              {instagram && (
                <li>
                  <SocialLink
                    ariaLabel="Мы в Instagram"
                    href={instagram}
                    icon={<Icon type="social" name="instagram" />}
                  />
                </li>
              )}
              {whatsapp && (
                <li>
                  <SocialLink
                    ariaLabel="Мы в Whats-App"
                    href={whatsapp}
                    icon={<Icon type="social" name="whats-app" />}
                  />
                </li>
              )}
              {telegram && (
                <li>
                  <SocialLink
                    ariaLabel="Мы в Telegram"
                    href={telegram}
                    icon={<Icon type="social" name="telegram" />}
                  />
                </li>
              )}
              {max && (
                <li>
                  <SocialLink
                    ariaLabel="Мы в Max"
                    href={max}
                    icon={<Icon type="social" name="max" />}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-row md:flex-col justify-between items-center gap-x-8 gap-y-4 text-sm text-charcoal-400 md:items-start">
          <p>{caption}</p>
          <a
            href="https://icher.pro"
            target="_blank"
            className="font-bold animate-background-shimmer bg-[linear-gradient(90deg,#7953cd,#00affa,#0190cd,#764ada,#7953cd)] bg-size-[500%_auto] bg-clip-text text-transparent"
          >
            Разработчик
          </a>
        </div>
      </Container>
    </footer>
  )
}
