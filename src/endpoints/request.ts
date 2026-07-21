import { Endpoint } from 'payload'

export const createRequest: Endpoint = {
  path: '/contact-form',
  method: 'post',
  handler: async (req) => {
    const data = await req.json?.()

    await req.payload.create({
      collection: 'requests',
      data: data,
    })

    return Response.json({
      error: false,
    })
  },
}
