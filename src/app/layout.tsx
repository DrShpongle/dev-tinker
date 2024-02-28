import type {Metadata} from 'next'
import Link from 'next/link'
import {Inter} from 'next/font/google'

import {Providers} from '@/providers'
import ThemeSwitch from '@/components/theme-switch'

import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header>
              <div className="container mx-auto max-w-screen-lg">
                <nav className="flex h-20 shrink-0 items-center justify-between border-b">
                  <Link href="/">Logo</Link>
                  <ThemeSwitch />
                </nav>
              </div>
            </header>
            <div className="grow">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
