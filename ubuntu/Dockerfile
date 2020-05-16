FROM ubuntu:16.04

# set working directory
WORKDIR /

# You can use home as $home
# You can build like ex) docker build -t name --build-arg home=$HOME
ARG home

RUN apt-get update

COPY ./index.js /index.js

# # install sudo and curl command
RUN apt-get -y install curl

# Install NodeJs
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# Install AWS CLI
RUN apt update
RUN apt install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt update
RUN apt install -y python3.7 python3-pip
RUN pip3 install awscli --upgrade

EXPOSE 3001

CMD [ "node","./index.js" ]
