FROM node:10-alpine

RUN npm install pm2 -g

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node .

RUN npm run build

EXPOSE 8080

CMD ["pm2-runtime", "./config/pm2.json"]
