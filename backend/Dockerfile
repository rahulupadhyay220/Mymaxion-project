# Use Node LTS base image
FROM node:20-alpine

WORKDIR /usr/src/app

# install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# copy source
COPY . .

# build/prepare (none for pure backend)

EXPOSE 4000
CMD ["node", "src/server.js"]
