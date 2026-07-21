import { clsx, type ClassValue } from 'clsx'
import { APIError } from 'payload'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function safePayload<T>(fn: () => Promise<T>) {
  try {
    const data = await fn()

    return {
      data,
      error: false,
    }
  } catch (error) {
    console.log(error)
    const apiError = error as APIError

    return {
      data: null,
      error: {
        status: apiError.status,
        message: apiError.message,
        validation: apiError.data?.errors,
      },
    }
  }
}
