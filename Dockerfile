FROM node:14.4.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]