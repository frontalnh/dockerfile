FROM docker.elastic.co/logstash/logstash:6.6.0

# set working directory
WORKDIR /usr/share/logstash

# copy whole file to /app which is working directory
COPY simple.config ./config/simple.config
COPY logstash.yml ./config/logstash.yml

CMD [ "logstash","-f","./conf/simple.config" ]
