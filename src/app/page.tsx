import * as React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="pt-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-2 gap-6">
          <Link
            href="/url-decode-and-encode"
            className="rounded-2xl border bg-gray-100 p-5 duration-150 hover:bg-gray-200"
          >
            Url Decode and Encode
          </Link>
          <Link
            href="/url-slugify"
            className="rounded-2xl border bg-gray-100 p-5 duration-150 hover:bg-gray-200"
          >
            Url Slugify
          </Link>
        </div>
      </div>
    </main>
  )
}
