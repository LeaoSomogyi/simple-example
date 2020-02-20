FROM nikolaik/python-nodejs:python3.8-nodejs13-alpine as npm_install
WORKDIR /usr/src/app
RUN npm i -g @angular/cli
COPY ["package.json", "package.json"]
RUN npm install --silent

FROM npm_install as angular_build
COPY ["src", "src"]
COPY ["angular.json", "tsconfig.json", "tsconfig.app.json", "tslint.json", "./"]
RUN ng build --build-optimizer --aot

FROM nginx:alpine as appclient_final
COPY --from=angular_build /usr/src/app/dist/simple-client-list /usr/share/nginx/html
COPY ["./nginx-custom.conf", "/etc/nginx/conf.d/default.conf"]