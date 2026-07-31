import { cacheTag } from 'next/cache'
import configPromise from '@payload-config'
import type { GlobalSlug, Payload } from 'payload'
import { getPayload } from 'payload'

type FindArgs<TSlug extends GlobalSlug> = Parameters<Payload['findGlobal']>[0] & {
  slug: TSlug
}

export const getGlobal = async <TSlug extends GlobalSlug>(params: FindArgs<TSlug>) => {
  'use cache'
  cacheTag(`global-${params.slug}`)

  const payload = await getPayload({ config: configPromise })

  return payload.findGlobal(params)
}
