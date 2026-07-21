export interface BeforeAfter {
  id: string
  before: string
  after: string
  title: string
  description?: string
}

export const beforeAfterData: BeforeAfter[] = [
  {
    id: 'treatment-1',
    title: 'SMAS-лифтинг',
    description: 'Подтяжка овала лица',
    before:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
    after:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
  {
    id: 'treatment-2',
    title: 'Лазерная шлифовка',
    description: 'Улучшение текстуры кожи',
    before:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
    after:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
  {
    id: 'treatment-3',
    title: 'RF-лифтинг',
    description: 'Термаж лица и шеи',
    before:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
    after:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
  {
    id: 'treatment-4',
    title: 'Ультразвуковая терапия',
    description: 'Ultherapy — безоперационная подтяжка',
    before:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
    after:
      'https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png',
  },
]
