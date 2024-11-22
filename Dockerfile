FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3443

CMD ["npm", "run", "start:prod"]