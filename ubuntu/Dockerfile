FROM ubuntu

# set working directory
WORKDIR /

RUN apt-get update

COPY ./index.js /index.js

# # install sudo and curl command
RUN apt-get install -y sudo && apt-get -y install curl
RUN sudo apt-get install curl python-software-properties
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN sudo apt-get install -y npm
RUN npm install -g fs

EXPOSE 3001

CMD [ "node","./index.js" ]
