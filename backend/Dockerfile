# base layer
FROM node:16-alpine

# use nodemon to strat app inside container
RUN npm install -g nodemon

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . . 

# port
EXPOSE 8080

# required for docker desktop port mapping
CMD ["npm", "run", "dev"]


