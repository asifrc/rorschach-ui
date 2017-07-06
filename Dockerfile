FROM node:8.1-alpine as builder

RUN mkdir /app
WORKDIR /app

RUN npm install -g yarn

COPY package.json /app
COPY package-lock.json /app
COPY yarn.lock /app
RUN yarn install

COPY . /app
RUN yarn build

FROM nginx:1.13-alpine
COPY --from=builder /app/build  /usr/share/nginx/html
