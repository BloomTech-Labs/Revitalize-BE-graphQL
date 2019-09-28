FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

RUN npm install pm2 -g

RUN npm run build

COPY --chown=node:node . .

EXPOSE 8080

CMD ["pm2-runtime", "./config/pm2.json"]
