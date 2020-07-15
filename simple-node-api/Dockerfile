FROM node:latest
WORKDIR /api
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
ENTRYPOINT ["./init.sh"]