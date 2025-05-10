# Stage 1: Build
FROM node:24-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN ls -la /app/src/models/

EXPOSE 3001

CMD ["npm", "run", "dev"]