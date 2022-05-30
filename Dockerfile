FROM node:alpine AS build

WORKDIR /app

RUN apk update && apk upgrade

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx:alpine AS prod-stage

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]