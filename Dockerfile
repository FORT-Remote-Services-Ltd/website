# Build
FROM node:lts-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production
FROM nginx:alpine

COPY --from=base app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]