import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ContactItem } from '../ui/contact-tem'
import { Map } from '../ui/map'
import { Icon } from '../ui/icon'
import { SocialLink } from '../ui/social-link'
import { BlockReveal } from '../ui/block-reveal'
import { getGlobal } from '@/api/globals'

export const Contacts = async () => {
  const { address, phone, email, hours, instagram, whatsapp, telegram, max } = await getGlobal({
    slug: 'contacts',
  })

  return (
    <Section title={<h2>Ждем вас в гости</h2>}>
      <Container className="w-full">
        <BlockReveal from={{ x: -50 }} to={{ x: 0 }}>
          <div className="mb-20 sm:mb-14">
            <ul className="space-y-6">
              {address && (
                <li data-block-reveal>
                  <ContactItem icon={<MapPin size={22} />} label="Адрес">
                    <address className="not-italic text-charcoal-700">{address}</address>
                  </ContactItem>
                </li>
              )}

              {phone && (
                <li data-block-reveal>
                  <ContactItem icon={<Phone size={22} />} label="Телефон">
                    <a
                      href={`tel:${phone}`}
                      className="text-charcoal-700 transition-colors hover:text-gold-600"
                    >
                      {phone}
                    </a>
                  </ContactItem>
                </li>
              )}

              {email && (
                <li data-block-reveal>
                  <ContactItem icon={<Mail size={22} />} label="Email">
                    <a
                      href={`mailto:${email}`}
                      className="text-charcoal-700 transition-colors hover:text-gold-600"
                    >
                      {email}
                    </a>
                  </ContactItem>
                </li>
              )}

              {hours && (
                <li data-block-reveal>
                  <ContactItem icon={<Clock size={22} />} label="Часы работы">
                    <time className="text-charcoal-700">{hours}</time>
                  </ContactItem>
                </li>
              )}
            </ul>

            <ul className="mt-8 flex gap-3">
              {instagram && (
                <li data-block-reveal>
                  <SocialLink
                    isBubble
                    href={instagram}
                    icon={<Icon type="social" name="instagram" />}
                  />
                </li>
              )}
              {whatsapp && (
                <li data-block-reveal>
                  <SocialLink
                    isBubble
                    href={whatsapp}
                    icon={<Icon type="social" name="whats-app" />}
                  />
                </li>
              )}
              {telegram && (
                <li data-block-reveal>
                  <SocialLink
                    isBubble
                    href={telegram}
                    icon={<Icon type="social" name="telegram" />}
                  />
                </li>
              )}
              {max && (
                <li data-block-reveal>
                  <SocialLink isBubble href={max} icon={<Icon type="social" name="max" />} />
                </li>
              )}
            </ul>
          </div>
        </BlockReveal>
        <Map />
      </Container>
    </Section>
  )
}
