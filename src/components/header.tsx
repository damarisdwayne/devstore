'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Suspense } from 'react'

export default function Header() {
  const isSmallScreen = useMediaQuery('(max-width: 730px)')
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        {!isSmallScreen && (
          <Link href="/" className="text-2xl font-extrabold text-white">
            devstore
          </Link>
        )}

        <Suspense>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          {!isSmallScreen && <span>Account</span>}
          <Image
            src="https://github.com/damarisdwayne.png"
            alt=""
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
