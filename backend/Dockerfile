FROM node:18
WORKDIR /usr/src/app
RUN mkdir ~/tests
COPY package*.json ./
RUN apt-get update || : && apt-get install python -y
RUN npm ci
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]