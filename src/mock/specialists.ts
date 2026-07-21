export interface Specialist {
  id: string
  name: string
  role: string
  experience: string
  specializations: string[]
  image: string
}

export const specialists: Specialist[] = [
  {
    id: 'ivanova',
    name: 'Елена Иванова',
    role: 'Главный врач-косметолог',
    experience: '15 лет опыта',
    specializations: ['Инъекционная косметология', 'Ботулинотерапия', 'Контурная пластика'],
    image:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
  {
    id: 'petrova',
    name: 'Анна Петрова',
    role: 'Врач-косметолог, аппаратный специалист',
    experience: '10 лет опыта',
    specializations: ['Аппаратная косметология', 'SMAS-лифтинг', 'Лазерные методики'],
    image:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
  {
    id: 'sidorova',
    name: 'Мария Сидорова',
    role: 'Косметолог-эстетист',
    experience: '8 лет опыта',
    specializations: ['Уходовые процедуры', 'Чистка лица', 'Пилинги'],
    image:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
]
