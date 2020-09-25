FROM nginx

WORKDIR /

# COPY nginx.conf /etc/nginx/nginx.conf


# 두개의 서버에 대한 설정파일을 지정한다.
COPY example1.com/example1.com.conf /etc/nginx/conf.d
COPY example2.com/example2.com.conf /etc/nginx/conf.d
# COPY 219.255.28.119/219.255.28.119.conf /etc/nginx/conf.d

# 두개의 인덱스 파일을 서로 다른 디렉토리에 위치시킨다.
COPY example1.com/index.html /var/www/example1.com/index.html
COPY example2.com/index.html /var/www/example2.com/index.html

EXPOSE 80