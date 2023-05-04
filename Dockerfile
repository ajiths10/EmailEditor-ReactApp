FROM node

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm","start" ]
