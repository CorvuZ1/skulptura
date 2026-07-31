'use client'

import { ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Loader } from '@/components/ui/loader'
import { Warning } from '@/components/ui/warning'

export interface IWaitProps {
  children: ReactNode
}

export const Wait = ({ children }: IWaitProps) => {
  return (
    <ErrorBoundary
      onError={(error) => console.log(error)}
      fallback={
        <Warning
          className="bg-cream-200"
          title="Что-то пошло не так"
          description="Попробуйте перезагрузить страницу или зайти позже."
        />
      }
    >
      <Suspense fallback={<Loader className="py-20" />}>{children}</Suspense>
    </ErrorBoundary>
  )
}
