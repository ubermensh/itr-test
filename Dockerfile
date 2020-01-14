FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY config ./config/
COPY models/ ./models/
COPY routes/ ./routes/
COPY validation/ ./validation/
COPY server.js .

EXPOSE 5000:5000

CMD ["npm", "start"]
