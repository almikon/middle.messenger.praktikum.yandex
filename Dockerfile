FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm
EXPOSE 3000
CMD node server.js
