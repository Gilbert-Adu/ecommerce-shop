FROM node:10-alpine

ENV NODE_ENV development
WORKDIR /

COPY . .
COPY package*.json ./


RUN npm install

CMD ["node", "app.js"]
EXPOSE 3000




