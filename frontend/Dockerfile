# FROM node:18
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN apt-get update
# RUN npm i
# COPY . .
# RUN npm run build
# CMD [ "npx", "serve", "build" ]
FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
# CMD [ "npx", "serve", "build" ]
CMD [ "npm", "start" ]