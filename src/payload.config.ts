import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import { ru } from 'payload/i18n/ru'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { BeforeAfter } from '@/collections/BeforeAfter'
import { Equipment } from '@/collections/Equipment'
import { Media } from '@/collections/Media'
import { Services } from '@/collections/Services'
import { Specialists } from '@/collections/Specialists'
import { Stats } from '@/collections/Stats'
import { Users } from '@/collections/Users'
import { Contacts } from '@/globals/contacts'
import { ContactsPage } from '@/globals/contacts-page'
import { CTA } from '@/globals/cta'
import { Footer } from '@/globals/footer'
import { HomePage } from '@/globals/home-page'
import { ServicesPage } from '@/globals/services-page'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    supportedLanguages: {
      ru,
      en,
    },
    fallbackLanguage: 'ru',
    translations: {
      ru: {
        general: {
          createNewLabel: 'Создать',
        },
      },
    },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  graphQL: {
    disable: true,
  },
  collections: [Users, Media, Services, BeforeAfter, Stats, Equipment, Specialists],
  globals: [HomePage, ServicesPage, ContactsPage, Footer, CTA, Contacts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
