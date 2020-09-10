FROM node:10.15.2

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN npm install

COPY ./src /usr/src

CMD ["npm", "run", "start:backend:dev"]