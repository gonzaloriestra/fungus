FROM node:14.16.1

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.prod.json ./tsconfig.prod.json

RUN yarn install

COPY ./src /app/src/
COPY ./database /app/database/
COPY ./config /app/config/
COPY ./.env.local ./.env.local
COPY ./.env.production ./.env.production

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
