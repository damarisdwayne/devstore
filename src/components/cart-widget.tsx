'use client'

import { useCart } from '@/context/cart-context'
import { useMediaQuery } from '@/hooks/use-media-query'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()
  const isSmallScreen = useMediaQuery('(max-width: 730px)')
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">
        {!isSmallScreen && 'Cart'} ({items.length})
      </span>
    </div>
  )
}
