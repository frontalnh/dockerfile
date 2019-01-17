FROM ubuntu

# set working directory
WORKDIR /

# update apt packages
RUN rm -rf /var/lib/apt/lists/*
RUN apt-get update

# install sudo and curl command
RUN apt-get install -y sudo && apt-get -y install curl

# register key for apt third party repository
RUN apt-get install -y gnupg2
RUN apt-key adv --keyserver "hkps.pool.sks-keyservers.net" --recv-keys "0x6B73A36E6026DFCA"

# register repository
RUN cd /etc/apt/sources.list.d && touch bintray.erlang.list && echo "deb http://dl.bintray.com/rabbitmq-erlang/debian bionic erlang" >> bintray.erlang.list && echo register finished! && cat bintray.erlang.list

# install repository
RUN apt-get update

RUN curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.deb.sh | sudo bash

RUN apt-get install -y rabbitmq-server
EXPOSE 3001
EXPOSE 5672
EXPOSE 15672

CMD [ "rabbitmq-server","start" ]
