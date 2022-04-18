FROM mysql

WORKDIR /

# you could give this a default value as well
ARG mysql_password
ENV MYSQL_ROOT_PASSWORD=$mysql_password
# COPY default.sql /docker-entrypoint-initdb.d/default.sql

# 한글깨짐 현상에 대해 utf8 을 기본 MYSQL 서버 세팅으로 하여 해결하는 설정이 포함.
# mysql configurations
# To ignore client information and use the default server character set, 
# use --skip-character-set-client-handshake
COPY ./my.cnf /etc/mysql/conf.d/my.cnf
EXPOSE 3306





