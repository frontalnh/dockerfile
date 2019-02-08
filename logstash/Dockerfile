FROM docker.elastic.co/logstash/logstash:6.6.0

# set working directory
WORKDIR /usr/share/logstash

# copy whole file to /app which is working directory
COPY logstash.yml ./config/logstash.yml
COPY config/webinar.conf ./config/webinar.conf
COPY config/tcp.conf ./config/tcp.conf
COPY config/default.conf ./config/default.conf

EXPOSE 5044

CMD [ "logstash" ]
