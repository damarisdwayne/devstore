import { z } from 'zod'
import data from '../data.json'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const { searchParams } = req.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase())
  })

  if (!products) {
    return Response.json({ message: 'Products not found' }, { status: 400 })
  }

  return Response.json(products)
}
