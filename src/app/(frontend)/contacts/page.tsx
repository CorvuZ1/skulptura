import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Contacts } from '@/components/sections/contacts'

export default function ContactsPage() {
  return (
    <div>
      <Hero
        image="https://static.tildacdn.com/tild6637-3536-4366-b865-376135383739/3.png"
        title={<h1>Свяжитесь с нами</h1>}
        description="Мы будем рады ответить на ваши вопросы и помочь записаться на удобное время."
      />

      <Contacts />
    </div>
  )
}
