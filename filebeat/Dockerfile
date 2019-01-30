FROM docker.elastic.co/beats/filebeat:6.5.4

# set working directory
WORKDIR /

# copy whole file to /app which is working directory
COPY ./filebeat.yml /usr/share/filebeat/filebeat.yml

CMD [ "--strict.perms=false" ]
