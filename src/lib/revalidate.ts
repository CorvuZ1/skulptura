import { revalidateTag } from 'next/cache'
import type { GlobalSlug, PayloadRequest } from 'payload'

type RevalidationHooksParamsType = {
  tag: string
  globalSlugs?: GlobalSlug[]
  field?: string
}

export const revalidationHooks = ({
  tag,
  globalSlugs,
  field = 'updatedAt',
}: RevalidationHooksParamsType) => {
  const handler = ({ req }: { req: PayloadRequest }) => {
    revalidateTag(tag, 'max')

    if (globalSlugs && globalSlugs?.length > 0) {
      globalSlugs.forEach((slug) => {
        req.payload.updateGlobal({
          slug,
          data: {
            [field]: new Date().toISOString(),
          },
        })
      })
    }
  }

  return {
    afterChange: [handler],
    afterDelete: [handler],
  }
}
