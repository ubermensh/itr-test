# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install 
#RUN npm install react-scripts@3.0.1 -g --silent
COPY . .

EXPOSE 3000:3000

# start app
CMD ["npm", "start"]
