import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['better-sqlite3', '@prisma/adapter-better-sqlite3'],
  turbopack: {
    resolveAlias: {
      '.prisma/client/default': './node_modules/.prisma/client/default.js'
    }
  }
}

export default nextConfig