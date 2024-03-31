FROM node:10-alpine

ENV NODE_ENV development
WORKDIR /

COPY . .
COPY package*.json ./


RUN npm install
EXPOSE 3000

CMD ["node", "app.js"]




