FROM node:18.6.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev:watch" ]