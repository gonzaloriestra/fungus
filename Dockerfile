FROM node:14.16.1

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.prod.json ./tsconfig.prod.json

RUN yarn install

COPY ./src /app/src/
COPY ./config /app/config/
COPY ./database /app/database/
COPY ./applications/backend/src /app/applications/backend/src/
COPY ./applications/backend/server.ts /app/applications/backend/

RUN yarn build:backend

EXPOSE 3001
CMD ["yarn", "start:backend"]
