'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useTheme} from 'next-themes'

import ThemeSwitch from '@/components/theme-switch'

const Navigation = () => {
  const [mounted, setMounted] = React.useState(false)
  const {theme} = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header>
      <div className="container mx-auto max-w-screen-lg">
        <nav className="flex h-20 min-h-5 shrink-0 items-center justify-between border-b">
          <Link href="/" className="inline-block min-h-[50px]">
            {mounted && (
              <Image
                src={
                  theme === 'light'
                    ? '/assets/images/logos/logo.png'
                    : '/assets/images/logos/logo-dark.png'
                }
                alt=""
                width={60}
                height={50}
              />
            )}
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  )
}

export default Navigation
