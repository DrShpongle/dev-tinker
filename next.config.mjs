/** @type {import('next').NextConfig} */

const IMAGE_HOST_DOMAINS = ['fakeimg.pl', 'res.cloudinary.com']

const nextConfig = {
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
}

export default nextConfig
