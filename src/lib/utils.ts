import { getGlobal } from '@/api/globals'
import { clsx, type ClassValue } from 'clsx'
import { Metadata } from 'next'
import { APIError, GlobalSlug } from 'payload'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
