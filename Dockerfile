FROM node:boron
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm i -g gulp
RUN gulp
EXPOSE 3000
CMD [ "npm", "start" ]