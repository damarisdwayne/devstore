'use client'

import { useCart } from '@/context/cart-context'

export interface AddToCardButtonProps {
  productId: number
}

export function AddToCardButton({ productId }: AddToCardButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold"
    >
      Adicionar ao carrinho
    </button>
  )
}
