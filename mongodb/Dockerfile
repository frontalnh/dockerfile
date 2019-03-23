FROM mongo

WORKDIR /usr/src/configs

COPY ./dbSetup.js /docker-entrypoint-initdb.d/dbSetup.js

ENV MONGO_INITDB_ROOT_USERNAME=expirit
ENV MONGO_INITDB_ROOT_PASSWORD=tan!7expirit

EXPOSE 27017
