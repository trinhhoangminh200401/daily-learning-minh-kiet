# ========================================
# DOCKERFILE - Multi-stage Build
# Based on: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Node.js Guide: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# ========================================

# ========================================
# STAGE 1: Build
# ========================================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies for native modules
RUN apk add --no-cache python3 make g++

# Copy package files first (for better caching)
COPY package*.json ./
COPY tsconfig.json ./

# Install ALL dependencies (including devDependencies for building)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Prune devDependencies for production
RUN npm prune --production

# ========================================
# STAGE 2: Production
# ========================================
FROM node:20-alpine AS production

# Add labels for image identification
LABEL maintainer="your-email@example.com"
LABEL version="1.0.0"
LABEL description="Microservice Product Management"

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package*.json ./

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Switch to non-root user
USER nodejs

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (res) => res.statusCode === 200 ? process.exit(0) : process.exit(1))"

# Start application
CMD ["node", "dist/main.js"]
