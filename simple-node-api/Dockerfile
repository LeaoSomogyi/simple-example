FROM node:latest
COPY . /var/www
WORKDIR /var/www
RUN npm i
ENTRYPOINT ["npm", "start"]
EXPOSE 3000