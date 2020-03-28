FROM node:9.2.0
COPY . /app/

WORKDIR /app

RUN npm install
CMD node app.js
