import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cacheTag } from 'next/cache'
import { safePayload } from '@/lib/utils'

export type GetAllPostsParamsType = {
  search?: string
  tags?: string[]
  sort?: string
}

export const getAllPosts = async (params?: GetAllPostsParamsType) => {
  'use cache'
  cacheTag('all-posts')

  const payload = await getPayload({ config: configPromise })

  return await safePayload(async () => {
    return payload.find({
      select: {
        gallery: false,
        otherPosts: false,
      },
      sort: params?.sort === 'oldest' ? 'createdAt' : '',
      where: {
        and: [
          {
            tags: {
              contains: params?.tags || [],
            },
          },
        ],
        or: [
          {
            title: {
              contains: params?.search || '',
            },
          },
          {
            shortDescription: {
              contains: params?.search || '',
            },
          },
        ],
      },
      collection: 'posts',
    })
  })
}
