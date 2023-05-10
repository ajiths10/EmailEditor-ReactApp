FROM node:17-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g npm

RUN npm install 

EXPOSE 3000

CMD ["npm","start" ]
