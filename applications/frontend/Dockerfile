FROM node:14.16.1

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./tsconfig.json ./tsconfig.json

RUN yarn install

COPY ./src /app/src/

EXPOSE 3000
CMD ["yarn", "start:dev"]
