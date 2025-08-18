# Use the official Node.js image as a base
FROM node:20.16.0-alpine AS base

# Stage 1: Dependencies
FROM base AS deps
WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install dependencies with legacy peer deps (avoids React 19 conflicts)
RUN npm install --legacy-peer-deps --only=production

# Stage 2: Builder
FROM base AS builder
WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install all dependencies (with devDeps, ignoring peer conflicts)
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 3: Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
