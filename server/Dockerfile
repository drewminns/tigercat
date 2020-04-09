FROM node:12.14.1-slim
RUN apt-get -qy update && apt-get -qy install openssl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:server"]
