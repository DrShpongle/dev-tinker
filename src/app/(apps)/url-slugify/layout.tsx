import type {Metadata} from 'next'

import {siteConfig} from '@/config/site'

export const metadata: Metadata = {
  title: 'URL Slug Generator',
  description: 'Easy to use multi language URL slug generator',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://res.cloudinary.com/df9hca5ni/image/upload/v1709433066/web-tinker/og-images/piqdgrqpicq7mhycyipo.png',
      },
    ],
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="pt-20">{children}</main>
}
