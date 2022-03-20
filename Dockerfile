FROM node:12-alpine

WORKDIR /var/www/application/

COPY package.json .
COPY yarn.lock .

RUN yarn install

CMD yarn run start:dev