export interface Publication {
  id: string
  title: string
  description: string
  services: { name: string; price: string }[]
}

export const publications: Publication[] = [
  {
    id: 'injection',
    title: 'Инъекционная косметология',
    description:
      'Современные методики омоложения с помощью инъекционных препаратов премиум-класса.',
    services: [
      { name: 'Ботулинотерапия (1 зона)', price: '6 500 ₽' },
      { name: 'Контурная пластика губ (1 мл)', price: '14 500 ₽' },
      { name: 'Биоревитализация', price: '11 000 ₽' },
      { name: 'Мезотерапия лица', price: '8 500 ₽' },
      { name: 'Плазмолифтинг', price: '7 500 ₽' },
    ],
  },
  {
    id: 'apparatus',
    title: 'Аппаратная косметология',
    description: 'Безопасные и эффективные процедуры на оборудовании экспертного класса.',
    services: [
      { name: 'SMAS-лифтинг', price: '25 000 ₽' },
      { name: 'RF-лифтинг лица', price: '9 000 ₽' },
      { name: 'Фотоомоложение IPL', price: '7 500 ₽' },
      { name: 'Лазерная шлифовка', price: '18 000 ₽' },
      { name: 'Микротоковая терапия', price: '5 500 ₽' },
    ],
  },
  {
    id: 'care',
    title: 'Уходовые программы',
    description: 'Комплексный уход и глубокая очистка для здоровья и сияния вашей кожи.',
    services: [
      { name: 'HydraFacial', price: '9 000 ₽' },
      { name: 'Глубокая чистка лица', price: '6 000 ₽' },
      { name: 'Химический пилинг', price: '5 500 ₽' },
      { name: 'Уход «Сияние кожи»', price: '7 000 ₽' },
      { name: 'Массаж лица скульптурный', price: '4 500 ₽' },
    ],
  },
]
