FROM mysql

WORKDIR /

ENV MYSQL_ROOT_PASSWORD=test1234
COPY default.sql /docker-entrypoint-initdb.d/default.sql
EXPOSE 3306