/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/ascii-reactions',
  assetPrefix: '/ascii-reactions/',
  env: {
    repoUrl: 'https://github.com/rzhade3/ascii-reactions',
  }
}

module.exports = nextConfig
