import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { ru } from 'payload/i18n/ru'
import { en } from 'payload/i18n/en'
import { Services } from './collections/services'
import { HomePage } from './globals/home-page'
import { ContactsPage } from './globals/contacts-page'
import { Footer } from './globals/footer'
import { ServicesPage } from './globals/services-page'
import { CTA } from './globals/cta'
import { Contacts } from './globals/contacts'
import { BeforeAfter } from './collections/before-after'
import { Stats } from './collections/stats'
import { Equipment } from './collections/equipment'
import { Specialists } from './collections/specialists'

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
