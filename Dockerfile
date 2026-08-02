FROM node:22-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install

RUN npm run build:compile

FROM node:22-alpine AS runner

WORKDIR /app

COPY . .

COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN npm ci --omit=dev

EXPOSE 3001

ENV PORT=3001

CMD ["sh", "-c", "npm run payload migrate && npm run build:generate && node server.js"]