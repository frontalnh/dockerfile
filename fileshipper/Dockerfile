FROM node

WORKDIR /fileshipper
RUN mkdir /fileshipper/test

COPY ./index.js /fileshipper/index.js
COPY ./package.json /fileshipper/package.json

VOLUME [/Users/namhoonlee/Desktop/test /fileshipper/test]

RUN npm install

CMD [ "node","./index.js" ]