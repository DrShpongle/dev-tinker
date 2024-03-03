import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Page() {
  return (
    <main className="pt-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-3 gap-6">
          {apps.map((app) => {
            return (
              <Link
                key={`app-${app.title}`}
                href={app.href}
                className="duration-200 hover:scale-105"
              >
                <Card>
                  <CardContent className="pt-6">
                    <Image
                      src={app.image}
                      width={600}
                      height={600}
                      alt=""
                      className="w-full"
                    />
                  </CardContent>
                  <CardFooter>
                    <p>{app.title}</p>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

const apps = [
  {
    title: 'URL Slugify',
    href: '/url-slugify',
    image:
      'https://res.cloudinary.com/df9hca5ni/image/upload/v1709430609/web-tinker/card-images/vifksjj2kybcpba2jsvw.png',
  },
  {
    title: 'URL Decode and Encode',
    href: '/url-decode-and-encode',
    image:
      'https://res.cloudinary.com/df9hca5ni/image/upload/v1709430608/web-tinker/card-images/rvikv3qxrpxau4gku10a.png',
  },
  {
    title: 'HEX/RGB/HSL converter',
    href: '/hex-rgb-hsl-converter',
    image:
      'https://res.cloudinary.com/df9hca5ni/image/upload/v1709430609/web-tinker/card-images/apfpuwofc7ra5rqgh3af.png',
  },
]
