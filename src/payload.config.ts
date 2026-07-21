import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ru } from 'payload/i18n/ru'
import { en } from 'payload/i18n/en'
import { Posts } from './collections/Posts'
import { Requests } from './collections/Requests'
import { createRequest } from './endpoints/request'
import { Services } from './collections/Services'
import { FAQ } from './collections/FAQ'
import { HomePage } from './globals/home-page'
import { AboutPage } from './globals/about-page'
import { ContactsPage } from './globals/contacts-page'
import { General } from './globals/general'

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
  collections: [Users, Media, Posts, Requests, Services, FAQ],
  globals: [HomePage, ContactsPage, AboutPage, General],
  endpoints: [createRequest],
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
