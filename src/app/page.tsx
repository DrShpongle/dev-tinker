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
          <Link href="/url-decode-and-encode">
            <Card>
              <CardContent className="pt-6">
                <Image
                  src="https://fakeimg.pl/600x600?text=Url+Decode+and+Encode"
                  width={600}
                  height={600}
                  alt=""
                  className="w-full"
                />
              </CardContent>
              <CardFooter>
                <p>Url Decode and Encode</p>
              </CardFooter>
            </Card>
          </Link>
          <Link href="/url-slugify">
            <Card>
              <CardContent className="pt-6">
                <Image
                  src="https://fakeimg.pl/600x600?text=Url+Slugify"
                  width={600}
                  height={600}
                  alt=""
                  className="w-full"
                />
              </CardContent>
              <CardFooter>
                <p>Url Slugify</p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}
