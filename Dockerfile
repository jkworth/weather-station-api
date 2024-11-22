FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
RUN touch .env

EXPOSE 3443

CMD ["npm", "run", "start:prod"]