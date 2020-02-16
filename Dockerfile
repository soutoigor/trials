
FROM node:12.13.0

WORKDIR /usr/src/trials

COPY package*.json ./

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 8000

CMD nodemon -L --watch . index.js
