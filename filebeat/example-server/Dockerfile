FROM node:8-alpine

# set working directory
WORKDIR /app

# install global environment
RUN npm i npm@latest -g


# copy whole file to /app which is working directory
COPY . /app

# install npm package
RUN npm install

# give execute permission to script file
# Make port 3001 available to the world outside this container
EXPOSE 3001


CMD [ "node","./server.js" ]
