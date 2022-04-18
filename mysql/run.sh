CONTAINER_NAME=$1
DB_PASSWORD=$2
DB_PORT=$3

docker build . -t custom-mysql --build-arg mysql_password=$DB_PASSWORD
docker run -d --name $CONTAINER_NAME -p $DB_PORT:3306 \
  -e MYSQL_ROOT_PASSWORD=$DB_PASSWORD custom-mysql \
  --default-authentication-plugin=mysql_native_password \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci
