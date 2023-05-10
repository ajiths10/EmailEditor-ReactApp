FROM node:19-alpine3.16

WORKDIR /usr/src/app

COPY . .

RUN npm install -g npm

RUN npm install 

EXPOSE 3000

CMD ["npm","start" ]
