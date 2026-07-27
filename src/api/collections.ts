import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { CollectionSlug, Payload } from 'payload'
import { cacheTag } from 'next/cache'

type FindArgs<TSlug extends CollectionSlug> = Parameters<Payload['find']>[0] & {
  collection: TSlug
}

export const getCollection = async <TSlug extends CollectionSlug>(params: FindArgs<TSlug>) => {
  'use cache'

  cacheTag('collection', params.collection)

  const payload = await getPayload({ config: configPromise })

  return await payload.find(params)
}
