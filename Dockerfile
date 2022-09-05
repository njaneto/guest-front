FROM node:13-alpine

WORKDIR /app

COPY . /app/

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

CMD ["npm", "start"]