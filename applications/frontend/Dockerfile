FROM node:14.16.1

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY ./src /app/

EXPOSE 3000
CMD ["yarn", "start:dev"]
