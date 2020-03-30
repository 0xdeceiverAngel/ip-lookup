FROM node:9.2.0
COPY ./package.json /app/
COPY ./ ./
WORKDIR /app

RUN npm install



CMD node app.js
