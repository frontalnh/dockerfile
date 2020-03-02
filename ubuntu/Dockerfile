FROM ubuntu:18.04

# set working directory
WORKDIR /

# You can use home as $home
# You can build like ex) docker build -t name --build-arg home=$HOME
ARG home

RUN apt-get update

COPY ./index.js /index.js

# # install sudo and curl command
RUN apt-get install -y sudo && apt-get -y install curl

# Install NodeJs
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Install AWS CLI
RUN sudo apt update
RUN apt install -y software-properties-common
RUN sudo add-apt-repository ppa:deadsnakes/ppa
RUN sudo apt update
RUN sudo apt install -y python3.7 python3-pip
RUN pip3 install awscli --upgrade

EXPOSE 3001

CMD [ "node","./index.js" ]
