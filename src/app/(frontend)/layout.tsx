import './styles.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

const raleway = localFont({
  src: [
    {
      path: '../../../public/fonts/raleway/Raleway-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/raleway/Raleway-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/raleway/Raleway-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
})

const cormorantGaramond = localFont({
  src: [
    {
      path: '../../../public/fonts/cormorant-garamond/CormorantGaramond-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-secondary',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth text-charcoal-800 antialiased selection:bg-gold">
      <body
        className={cn(
          cormorantGaramond.variable,
          raleway.variable,
          'min-h-screen flex flex-col font-primary',
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
