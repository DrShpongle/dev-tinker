import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {Providers} from '@/providers'
import {Toaster} from '@/components/ui/toaster'

import Navigation from '@/components/naviagation'
import {siteConfig} from '@/config/site'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Yevhen Nahalskyi',
      url: 'https://twitter.com/nahalskyi',
    },
  ],
  creator: 'Yevhen Nahalskyi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [siteConfig.ogImage],
  //   creator: '@shadcn',
  // },
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
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
            <Navigation />
            <div className="grow">{children}</div>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
