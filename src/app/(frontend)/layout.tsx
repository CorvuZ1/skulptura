import './styles.css'
import localFont from 'next/font/local'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'
import { Wait } from '@/components/ui/wait'
import { Metadata } from 'next'
import { getLayoutMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'

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

const playfairDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/playfair-display/PlayfairDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-secondary',
})

export const generateMetadata = () => getLayoutMetadata()

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className="text-charcoal-800 antialiased selection:bg-gold"
    >
      <body
        className={cn(
          playfairDisplay.variable,
          raleway.variable,
          'min-h-screen flex flex-col font-primary',
        )}
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Wait>
          <Footer />
        </Wait>
      </body>
    </html>
  )
}
