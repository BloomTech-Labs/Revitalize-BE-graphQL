FROM node:10.16.3

# To handle 'not get uid/gid' error
RUN npm config set unsafe-perm true

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --production --no-progress

COPY . .

RUN chown -R node:node .

RUN npm install pm2 prisma -g --silent

RUN npm run build

EXPOSE 4000

CMD ["pm2-runtime", "./config/pm2.config.json"]
