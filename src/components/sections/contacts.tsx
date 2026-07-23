import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ContactItem } from '../ui/contact-tem'
import { Map } from '../ui/map'
import { Icon } from '../ui/icon'
import { SocialLink } from '../ui/social-link'
import { BlockReveal } from '../ui/block-reveal'

export const Contacts = () => {
  return (
    <Section title={<h2>Ждем вас в гости</h2>}>
      <Container className="w-full">
        <BlockReveal from={{ x: -50 }} to={{ x: 0 }}>
          <div className="mb-20 sm:mb-14">
            <ul className="space-y-6">
              <li data-block-reveal>
                <ContactItem icon={<MapPin size={22} />} label="Адрес">
                  <div className="text-charcoal-700">Улица Большая</div>
                </ContactItem>
              </li>

              <li data-block-reveal>
                <ContactItem icon={<Phone size={22} />} label="Телефон">
                  <a href="/" className="text-charcoal-700 transition-colors hover:text-gold-600">
                    +7935823582
                  </a>
                </ContactItem>
              </li>

              <li data-block-reveal>
                <ContactItem icon={<Mail size={22} />} label="Email">
                  <a href="/" className="text-charcoal-700 transition-colors hover:text-gold-600">
                    ergrtjo@mail.ru
                  </a>
                </ContactItem>
              </li>

              <li data-block-reveal>
                <ContactItem icon={<Clock size={22} />} label="Часы работы">
                  <span className="text-charcoal-700">09:00-21:00</span>
                </ContactItem>
              </li>
            </ul>

            <ul className="mt-8 flex gap-3">
              <li data-block-reveal>
                <SocialLink isBubble href="/" icon={<Icon type="social" name="instagram" />} />
              </li>
              <li data-block-reveal>
                <SocialLink isBubble href="/" icon={<Icon type="social" name="whats-app" />} />
              </li>
              <li data-block-reveal>
                <SocialLink isBubble href="/" icon={<Icon type="social" name="telegram" />} />
              </li>
              <li data-block-reveal>
                <SocialLink isBubble href="/" icon={<Icon type="social" name="max" />} />
              </li>
            </ul>
          </div>
        </BlockReveal>
        <Map />
      </Container>
    </Section>
  )
}
