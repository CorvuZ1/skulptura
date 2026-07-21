export interface StudioInfo {
  name: string
  tagline: string
  phone: string
  email: string
  address: string
  hours: { day: string; time: string }[]
  social: { label: string; href: string }[]
}

export const studioInfo: StudioInfo = {
  name: 'Lumière Aesthetics',
  tagline: 'Премиальная студия косметологии',
  phone: '+7 (495) 123-45-67',
  email: 'info@lumiere-aesthetics.ru',
  address: 'г. Москва, ул. Тверская, д. 15, офис 204',
  hours: [
    { day: 'Понедельник — Пятница', time: '09:00 — 21:00' },
    { day: 'Суббота', time: '10:00 — 20:00' },
    { day: 'Воскресенье', time: '11:00 — 18:00' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Telegram', href: '#' },
    { label: 'WhatsApp', href: '#' },
  ],
}
