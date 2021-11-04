FROM node

WORKDIR /usr/blog

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 5501
CMD ["npm","start"]