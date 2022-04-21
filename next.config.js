/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: 'mongodb+srv://lucho20pt:pantufa20@cluster0.exhps.mongodb.net/pizza?retryWrites=true&w=majority'
  },
  images: {
    // domains: ['a0.muscache.com'],
  }
}

module.exports = nextConfig

